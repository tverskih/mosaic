import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { McTabsModule } from '@ptsecurity/mosaic/tabs';

import {
    ComponentApiComponent,
    ComponentOverviewComponent,
    ComponentViewerComponent
} from './component-viewer.component';


@NgModule({
    imports: [
        McTabsModule,
        RouterModule,
        // DocViewerModule,
        CommonModule
    ],
    exports: [
        ComponentViewerComponent
    ],
    declarations: [
        ComponentViewerComponent,
        ComponentOverviewComponent,
        ComponentApiComponent
    ],
    providers: []
})
export class ComponentViewerModule {}
