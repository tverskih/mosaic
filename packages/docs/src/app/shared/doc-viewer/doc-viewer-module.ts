import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortalModule } from '@ptsecurity/cdk/portal';
import { McButtonModule } from '@ptsecurity/mosaic/button';
import { McTabsModule } from '@ptsecurity/mosaic/tabs';

import { CopierService } from '../copier/copier.service';
import { ExampleViewer } from '../example-viewer/example-viewer';

import { DocViewer } from './doc-viewer';


// ExampleViewer is included in the DocViewerModule because they have a circular dependency.
@NgModule({
  imports: [
    McButtonModule,
    McTabsModule,
    CommonModule,
    PortalModule
  ],
  providers: [CopierService],
  declarations: [DocViewer, ExampleViewer],
  entryComponents: [ExampleViewer],
  exports: [DocViewer, ExampleViewer]
})
export class DocViewerModule { }
