import { Component, ViewEncapsulation } from '@angular/core';


@Component({
    selector: 'docs-component-viewer',
    templateUrl: './component-viewer.template.html',
    encapsulation: ViewEncapsulation.None
})
export class ComponentViewerComponent {

}


@Component({
    selector: 'component-overview',
    templateUrl: './component-overview.template.html',
    encapsulation: ViewEncapsulation.None
})
export class ComponentOverviewComponent {

}

@Component({
    selector: 'component-api',
    templateUrl: './component-api.template.html',
    encapsulation: ViewEncapsulation.None
})
export class ComponentApiComponent extends ComponentOverviewComponent {}
