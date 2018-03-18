import { statSync } from 'fs';
import { sync as glob } from 'glob';
import { task } from 'gulp';
import { join } from 'path';

import * as firebaseAdmin from 'firebase-admin';

import {buildConfig} from '../../packages';
import {openFirebaseDashboardApp} from '../utils/firebase';

import * as util from '../../../scripts/util';


/** Path to the directory where all bundles are living. */
const bundlesDir = join(buildConfig.outputDir, 'bundles');

/* tslint:disable:no-magic-numbers */
/* tslint:disable:no-console */

/** Task which runs test against the size of mosaic. */
task('payload', ['mosaic:clean-build'], async () => {

    const results = {
        timestamp: Date.now(),
        // mosaic bundles
        mosaic_umd: getBundleSize('mosaic.umd.js'),
        mosaic_umd_minified_uglify: getBundleSize('mosaic.umd.min.js'),
        mosaic_fesm_2015: getBundleSize('mosaic.js') + getBundleSize('mosaic/!(*.es5).js'),
        mosaic_fesm_2014: getBundleSize('mosaic.es5.js') + getBundleSize('mosaic/*.es5.js'),
        // CDK bundles
        cdk_umd: getBundleSize('cdk*.umd.js'),
        cdk_umd_minified_uglify: getBundleSize('cdk*.umd.min.js'),
        cdk_fesm_2015: getBundleSize('cdk.js') + getBundleSize('cdk/!(*.es5).js'),
        cdk_fesm_2014: getBundleSize('cdk.es5.js') + getBundleSize('cdk/*.es5.js')
    };

    // Print the results to the console, so we can read it from the CI.
    console.log('Payload Results:', JSON.stringify(results, null, 2));

    const firebaseApp = openFirebaseDashboardApp();
    const database = firebaseApp.database();

    // process.env['CIRCLE_SHA1']!
    const currentSha = await util.git([`rev-parse --short HEAD`]);

    await Promise.all([
        uploadPayloadResults(database, currentSha, results)
    ]);

    firebaseApp.delete();
});

/** Uploads the current payload results to the Dashboard database. */
async function uploadPayloadResults(database: firebaseAdmin.database.Database, currentSha: string,
                                    currentPayload: any) {

    await database.ref('payloads').child(currentSha).set(currentPayload);
}

/** Returns the size of the given library bundle. */
function getBundleSize(bundleName: string) {
    return glob(bundleName, {cwd: bundlesDir})
        .reduce((sum, fileName) => sum + getFilesize(join(bundlesDir, fileName)), 0);
}

/** Returns the size of a file in kilobytes. */
function getFilesize(filePath: string) {
    return statSync(filePath).size / 1000;
}

/* tslint:enable:no-magic-numbers */
/* tslint:enable:no-console */
