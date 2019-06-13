import { VERSION } from '@ptsecurity/mosaic/version';


/** This material version will be used in footer and stackblitz. */
export const mosaicVersion = VERSION.full;

/** Version information with title and redirect url */
// tslint:disable-next-line:naming-convention
export interface VersionInfo {
    url: string;
    title: string;
}
