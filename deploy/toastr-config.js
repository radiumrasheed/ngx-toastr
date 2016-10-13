"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var toast_component_1 = require('./toast-component');
var ToastConfig = (function () {
    function ToastConfig(config) {
        if (config === void 0) { config = {}; }
        // shows close button
        this.closeButton = false;
        // extendedTimeOut: how long the toast will display after a user hovers
        this.extendedTimeOut = 1000;
        this.onHidden = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.onTap = new core_1.EventEmitter();
        this.progressBar = false;
        this.timeOut = 5000;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        this.tapToDismiss = true;
        this.toastComponent = toast_component_1.Toast;
        this.closeButton = config.closeButton || this.closeButton;
        this.extendedTimeOut = config.extendedTimeOut || this.extendedTimeOut;
        this.onHidden = config.onHidden || this.onHidden;
        this.onShown = config.onShown || this.onShown;
        this.onTap = config.onTap || this.onTap;
        this.progressBar = config.progressBar || this.progressBar;
        this.timeOut = config.timeOut || this.timeOut;
        this.toastClass = config.toastClass || this.toastClass;
        this.positionClass = config.positionClass || this.positionClass;
        this.titleClass = config.titleClass || this.titleClass;
        this.messageClass = config.messageClass || this.messageClass;
        this.tapToDismiss = config.tapToDismiss || this.tapToDismiss;
        this.toastComponent = config.toastComponent || this.toastComponent;
    }
    ToastConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], ToastConfig);
    return ToastConfig;
}());
exports.ToastConfig = ToastConfig;
var ToastrConfig = (function (_super) {
    __extends(ToastrConfig, _super);
    // TODO:
    // preventOpenDuplicates: boolean = false;
    function ToastrConfig(config) {
        if (config === void 0) { config = {}; }
        _super.call(this, config);
        this.maxOpened = 0;
        this.autoDismiss = false;
        // TODO:
        // containerId: string = 'toast-container';
        this.iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
        };
        this.newestOnTop = true;
        this.preventDuplicates = false;
        this.maxOpened = config.maxOpened || this.maxOpened;
        this.autoDismiss = config.autoDismiss || this.autoDismiss;
        if (config.iconClasses) {
            this.iconClasses.error = config.iconClasses.error || this.iconClasses.error;
            this.iconClasses.info = config.iconClasses.info || this.iconClasses.info;
            this.iconClasses.success = config.iconClasses.success || this.iconClasses.success;
            this.iconClasses.warning = config.iconClasses.warning || this.iconClasses.warning;
        }
        this.newestOnTop = config.newestOnTop || this.newestOnTop;
        this.preventDuplicates = config.preventDuplicates || this.preventDuplicates;
    }
    ToastrConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], ToastrConfig);
    return ToastrConfig;
}(ToastConfig));
exports.ToastrConfig = ToastrConfig;
//# sourceMappingURL=/Users/scoope7/toastr-ng2/src/lib/toastr-config.js.map