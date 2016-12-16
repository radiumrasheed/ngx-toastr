"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var toast_component_1 = require('./toast-component');
var toastr_service_1 = require('./toastr-service');
var toastr_config_1 = require('./toastr-config');
var overlay_container_1 = require('./overlay/overlay-container');
var overlay_1 = require('./overlay/overlay');
exports.TOAST_CONFIG = new core_1.OpaqueToken('ToastConfig');
function provideToastrConfig(config) {
    return new toastr_config_1.ToastrConfig(config);
}
exports.provideToastrConfig = provideToastrConfig;
var ToastrModule = (function () {
    function ToastrModule() {
    }
    ToastrModule.forRoot = function (config) {
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: exports.TOAST_CONFIG, useValue: config },
                { provide: toastr_config_1.ToastrConfig, useFactory: provideToastrConfig, deps: [exports.TOAST_CONFIG] },
                overlay_container_1.OverlayContainer,
                overlay_1.Overlay,
                toastr_service_1.ToastrService
            ]
        };
    };
    ToastrModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [platform_browser_1.BrowserModule, common_1.CommonModule],
                    exports: [toast_component_1.Toast],
                    declarations: [toast_component_1.Toast],
                    entryComponents: [toast_component_1.Toast],
                },] },
    ];
    /** @nocollapse */
    ToastrModule.ctorParameters = function () { return []; };
    return ToastrModule;
}());
exports.ToastrModule = ToastrModule;
