import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { McButtonModule } from '@ptsecurity/mosaic/button';
import { McDropdownModule } from '@ptsecurity/mosaic/dropdown';
import { McIconModule } from '@ptsecurity/mosaic/icon';
import { McVerticalNavbarModule } from '@ptsecurity/mosaic/vertical-navbar';

import {MainLayoutComponent, MatTree} from './main-layout.component';
import {TreeComponent} from '../tree/tree.component';
import {McTreeModule} from '@ptsecurity/mosaic/tree';

import {CdkTreeModule} from '@ptsecurity/cdk/tree';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        CdkTreeModule,
        McTreeModule,
        McVerticalNavbarModule,
        McButtonModule,
        McIconModule,
        McDropdownModule

    ],
    exports: [MainLayoutComponent],
    declarations: [MainLayoutComponent, MatTree, TreeComponent]
})
export class MainLayoutModule {}
