"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var toast_component_1 = require('./toast-component');
/**
 * Configuration for an individual toast.
 */
var ToastConfig = (function () {
    function ToastConfig(config) {
        if (config === void 0) { config = {}; }
        // shows close button
        this.closeButton = false;
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
        if (config.extendedTimeOut === 0) {
            this.extendedTimeOut = config.extendedTimeOut;
        }
        else {
            this.extendedTimeOut = config.extendedTimeOut || this.extendedTimeOut;
        }
        this.onHidden = config.onHidden || this.onHidden;
        this.onShown = config.onShown || this.onShown;
        this.onTap = config.onTap || this.onTap;
        this.progressBar = config.progressBar || this.progressBar;
        if (config.timeOut === 0) {
            this.timeOut = config.timeOut;
        }
        else {
            this.timeOut = config.timeOut || this.timeOut;
        }
        this.toastClass = config.toastClass || this.toastClass;
        this.positionClass = config.positionClass || this.positionClass;
        this.titleClass = config.titleClass || this.titleClass;
        this.messageClass = config.messageClass || this.messageClass;
        this.tapToDismiss = config.tapToDismiss || this.tapToDismiss;
        this.toastComponent = config.toastComponent || this.toastComponent;
    }
    return ToastConfig;
}());
exports.ToastConfig = ToastConfig;
/**
 * Global Toast configuration
 */
var ToastrConfig = (function (_super) {
    __extends(ToastrConfig, _super);
    function ToastrConfig(config) {
        if (config === void 0) { config = {}; }
        _super.call(this, config);
        this.maxOpened = 0;
        this.autoDismiss = false;
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
            this.iconClasses.error = this.iconClasses.error || config.iconClasses.error;
            this.iconClasses.info = this.iconClasses.info || config.iconClasses.info;
            this.iconClasses.success = this.iconClasses.success || config.iconClasses.success;
            this.iconClasses.warning = this.iconClasses.warning || config.iconClasses.warning;
        }
        this.newestOnTop = config.newestOnTop || this.newestOnTop;
        this.preventDuplicates = config.preventDuplicates || this.preventDuplicates;
    }
    ToastrConfig.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ToastrConfig.ctorParameters = function () { return [
        null,
    ]; };
    return ToastrConfig;
}(ToastConfig));
exports.ToastrConfig = ToastrConfig;
