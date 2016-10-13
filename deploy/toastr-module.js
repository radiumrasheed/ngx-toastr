"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var toast_component_1 = require('./toast-component');
var toastr_service_1 = require('./toastr-service');
var toastr_config_1 = require('./toastr-config');
var overlay_container_1 = require('./overlay/overlay-container');
var overlay_1 = require('./overlay/overlay');
var ToastrModule = (function () {
    function ToastrModule() {
    }
    ToastrModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            exports: [toast_component_1.Toast],
            declarations: [toast_component_1.Toast],
            entryComponents: [toast_component_1.Toast],
            providers: [
                overlay_container_1.OverlayContainer,
                { provide: toastr_config_1.ToastConfig, useFactory: function () { return new toastr_config_1.ToastConfig(); } },
                { provide: toastr_config_1.ToastrConfig, useFactory: function () { return new toastr_config_1.ToastrConfig(); } },
                overlay_1.Overlay,
                toastr_service_1.ToastrService,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], ToastrModule);
    return ToastrModule;
}());
exports.ToastrModule = ToastrModule;
function provideToastr(config) {
    if (config === void 0) { config = {}; }
    return {
        provide: toastr_service_1.ToastrService,
        deps: [overlay_1.Overlay, toastr_config_1.ToastrConfig, toastr_config_1.ToastConfig],
        useFactory: function (overlay) {
            return new toastr_service_1.ToastrService(new toastr_config_1.ToastrConfig(config), overlay);
        }
    };
}
exports.provideToastr = provideToastr;
//# sourceMappingURL=/Users/scoope7/toastr-ng2/src/lib/toastr-module.js.map