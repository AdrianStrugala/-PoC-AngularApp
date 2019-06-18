import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

let SuperLibComponent = class SuperLibComponent {
};
SuperLibComponent = __decorate([
    Component({
        selector: "super-lib-component",
        template: "<p>Hello from the Super Library!</p>"
    })
], SuperLibComponent);

let SuperLibModule = class SuperLibModule {
};
SuperLibModule = __decorate([
    NgModule({
        declarations: [SuperLibComponent],
        exports: [SuperLibComponent]
    })
], SuperLibModule);

export { SuperLibComponent, SuperLibModule };
//# sourceMappingURL=super-lib.js.map
