import { VERSION } from '@ptsecurity/mosaic/core';


/** This material version will be used in footer and stackblitz. */
export const mosaicVersion = VERSION.full;

/** Version information with title and redirect url */
export interface VersionInfo {
    url: string;
    title: string;
}
