var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, OpaqueToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast } from './toast-component';
import { ToastrService } from './toastr-service';
import { ToastrConfig } from './toastr-config';
import { OverlayContainer } from './overlay/overlay-container';
import { Overlay } from './overlay/overlay';
export var TOAST_CONFIG = new OpaqueToken('ToastConfig');
export function provideToastrConfig(config) {
    return new ToastrConfig(config);
}
var ToastrModule = ToastrModule_1 = (function () {
    function ToastrModule() {
    }
    ToastrModule.forRoot = function (config) {
        return {
            ngModule: ToastrModule_1,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                { provide: ToastrConfig, useFactory: provideToastrConfig, deps: [TOAST_CONFIG] },
                OverlayContainer,
                Overlay,
                ToastrService
            ]
        };
    };
    return ToastrModule;
}());
ToastrModule = ToastrModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [Toast],
        declarations: [Toast],
        entryComponents: [Toast],
    })
], ToastrModule);
export { ToastrModule };
var ToastrModule_1;
