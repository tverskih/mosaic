import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {CdkTree} from '@ptsecurity/cdk/tree';


@Component({
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

}



@Component({
    selector: 'mat-tree',
    exportAs: 'matTree',
    template: `<ng-container></ng-container>`,
    host: {
        'class': 'mat-tree',
        'role': 'tree'
    },
    encapsulation: ViewEncapsulation.None,
    // See note on CdkTree for explanation on why this uses the default change detection strategy.
    // tslint:disable-next-line:validate-decorators
    changeDetection: ChangeDetectionStrategy.Default,
    providers: [{provide: CdkTree, useExisting: MatTree}]
})
export class MatTree<T> extends CdkTree<T> {
    // Outlets within the tree's template where the dataNodes will be inserted.
}
