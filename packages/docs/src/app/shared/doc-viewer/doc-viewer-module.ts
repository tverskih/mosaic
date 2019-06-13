import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@ptsecurity/cdk/portal';
import { McButtonModule } from '@ptsecurity/mosaic/button';
import { McTabsModule } from '@ptsecurity/mosaic/tabs';

import { CopierService } from '../copier/copier.service';
import { ExampleViewer } from '../example-viewer/example-viewer';
import { StackblitzButtonModule } from '../stackblitz/stackblitz-button';

import { DocViewer } from './doc-viewer';
import { HeaderLink } from './header-link';


// ExampleViewer is included in the DocViewerModule because they have a circular dependency.
@NgModule({
    imports: [
        McButtonModule,
        McTabsModule,
        CommonModule,
        PortalModule,
        StackblitzButtonModule
    ],
    providers: [CopierService],
    declarations: [DocViewer, ExampleViewer, HeaderLink],
    entryComponents: [ExampleViewer, HeaderLink],
    exports: [DocViewer, ExampleViewer, HeaderLink]
})
export class DocViewerModule {
}
