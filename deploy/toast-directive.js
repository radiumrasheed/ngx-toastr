var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, Directive, ElementRef } from '@angular/core';
var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    return ToastContainerDirective;
}());
ToastContainerDirective = __decorate([
    Directive({
        selector: '[toastContainer]',
        exportAs: 'toastContainer',
    }),
    __metadata("design:paramtypes", [ElementRef])
], ToastContainerDirective);
export { ToastContainerDirective };
var ToastContainerModule = ToastContainerModule_1 = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule_1,
            providers: []
        };
    };
    return ToastContainerModule;
}());
ToastContainerModule = ToastContainerModule_1 = __decorate([
    NgModule({
        exports: [ToastContainerDirective],
        declarations: [ToastContainerDirective],
    })
], ToastContainerModule);
export { ToastContainerModule };
var ToastContainerModule_1;
