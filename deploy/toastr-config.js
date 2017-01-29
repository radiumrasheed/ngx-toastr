var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from '@angular/core';
import { Toast } from './toast-component';
/**
 * Configuration for an individual toast.
 */
export var ToastConfig = (function () {
    function ToastConfig(config) {
        if (config === void 0) { config = {}; }
        // shows close button
        this.closeButton = false;
        this.extendedTimeOut = 1000;
        this.progressBar = false;
        this.timeOut = 5000;
        this.enableHtml = false;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        this.tapToDismiss = true;
        this.toastComponent = Toast;
        this.onActivateTick = false;
        this.closeButton = config.closeButton || this.closeButton;
        if (config.extendedTimeOut === 0) {
            this.extendedTimeOut = config.extendedTimeOut;
        }
        else {
            this.extendedTimeOut = config.extendedTimeOut || this.extendedTimeOut;
        }
        this.progressBar = config.progressBar || this.progressBar;
        if (config.timeOut === 0) {
            this.timeOut = config.timeOut;
        }
        else {
            this.timeOut = config.timeOut || this.timeOut;
        }
        this.enableHtml = config.enableHtml || this.enableHtml;
        this.toastClass = config.toastClass || this.toastClass;
        this.positionClass = config.positionClass || this.positionClass;
        this.titleClass = config.titleClass || this.titleClass;
        this.messageClass = config.messageClass || this.messageClass;
        this.tapToDismiss = config.tapToDismiss || this.tapToDismiss;
        this.toastComponent = config.toastComponent || this.toastComponent;
        this.onActivateTick = config.onActivateTick || this.onActivateTick;
    }
    return ToastConfig;
}());
export var ToastrIconClasses = (function () {
    function ToastrIconClasses() {
    }
    ToastrIconClasses.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ToastrIconClasses.ctorParameters = function () { return []; };
    return ToastrIconClasses;
}());
/**
 * Global Toast configuration
 */
export var ToastrConfig = (function (_super) {
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
        { type: Injectable },
    ];
    /** @nocollapse */
    ToastrConfig.ctorParameters = function () { return [
        { type: ToastrConfig, },
    ]; };
    return ToastrConfig;
}(ToastConfig));
export var ToastData = (function () {
    function ToastData() {
    }
    return ToastData;
}());
