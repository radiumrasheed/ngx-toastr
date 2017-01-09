import { NgModule, Directive, ElementRef } from '@angular/core';
export var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[toastContainer]',
                    exportAs: 'toastContainer',
                },] },
    ];
    /** @nocollapse */
    ToastContainerDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    return ToastContainerDirective;
}());
export var ToastContainerModule = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    ToastContainerModule.decorators = [
        { type: NgModule, args: [{
                    exports: [ToastContainerDirective],
                    declarations: [ToastContainerDirective],
                },] },
    ];
    /** @nocollapse */
    ToastContainerModule.ctorParameters = function () { return []; };
    return ToastContainerModule;
}());
