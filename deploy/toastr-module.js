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
export var ToastrModule = (function () {
    function ToastrModule() {
    }
    ToastrModule.forRoot = function (config) {
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                { provide: ToastrConfig, useFactory: provideToastrConfig, deps: [TOAST_CONFIG] },
                OverlayContainer,
                Overlay,
                ToastrService
            ]
        };
    };
    ToastrModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [Toast],
                    declarations: [Toast],
                    entryComponents: [Toast],
                },] },
    ];
    /** @nocollapse */
    ToastrModule.ctorParameters = function () { return []; };
    return ToastrModule;
}());
