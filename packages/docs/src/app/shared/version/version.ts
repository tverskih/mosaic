/* tslint:disable:no-var-requires */
const _package = require('../../../../../../package.json');


/** This material version will be used in footer and stackblitz. */
export const mosaicVersion = _package.version;

/** Version information with title and redirect url */
// tslint:disable-next-line:naming-convention
export interface VersionInfo {
    url: string;
    title: string;
}
