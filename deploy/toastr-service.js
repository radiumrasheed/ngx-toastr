"use strict";
var core_1 = require('@angular/core');
var overlay_1 = require('./overlay/overlay');
var portal_1 = require('./portal/portal');
var toastr_config_1 = require('./toastr-config');
var ToastrService = (function () {
    function ToastrService(toastrConfig, overlay) {
        this.toastrConfig = toastrConfig;
        this.overlay = overlay;
        this.index = 0;
        this.toasts = [];
        this.previousToastMessage = '';
        this.currentlyActive = 0;
    }
    ToastrService.prototype.success = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    ToastrService.prototype.error = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    ToastrService.prototype.info = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    ToastrService.prototype.warning = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    ToastrService.prototype.createToastConfig = function (optionsOverride) {
        if (!optionsOverride) {
            return Object.create(this.toastrConfig);
        }
        if (optionsOverride instanceof toastr_config_1.ToastConfig) {
            return optionsOverride;
        }
        return new toastr_config_1.ToastConfig(optionsOverride);
    };
    ToastrService.prototype.clear = function (toastId) {
        // Call every toast's remove function
        for (var i = 0; i < this.toasts.length; i++) {
            if (toastId !== undefined) {
                if (this.toasts[i].toastId === toastId) {
                    this.toasts[i].portal._component.remove();
                    return;
                }
            }
            else {
                this.toasts[i].portal._component.remove();
            }
        }
    };
    ToastrService.prototype.remove = function (toastId) {
        var _a = this._findToast(toastId), index = _a.index, activeToast = _a.activeToast;
        if (!activeToast) {
            return false;
        }
        activeToast.overlayRef.detach();
        this.toasts.splice(index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return;
        }
        if (this.currentlyActive <= this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].portal;
            if (p._component.state === 'inactive') {
                this.currentlyActive = this.currentlyActive + 1;
                p._component.activateToast();
            }
        }
        return true;
    };
    ToastrService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return { index: null, activeToast: null };
    };
    ToastrService.prototype.isDuplicate = function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    ToastrService.prototype._buildNotification = function (type, message, title, optionsOverride) {
        var _this = this;
        if (optionsOverride === void 0) { optionsOverride = Object.create(this.toastrConfig); }
        // max opened and auto dismiss = true
        if (this.toastrConfig.preventDuplicates && this.isDuplicate(message)) {
            return;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var component = new portal_1.ComponentPortal(optionsOverride.toastComponent);
        var ins = {
            toastId: this.index++,
            message: message,
            overlayRef: this.overlay.create(optionsOverride.positionClass),
        };
        ins.portal = ins.overlayRef.attach(component, this.toastrConfig.newestOnTop);
        ins.portal._component.toastId = ins.toastId;
        ins.portal._component.message = message;
        ins.portal._component.title = title;
        ins.portal._component.toastType = type;
        ins.portal._component.options = optionsOverride;
        if (!keepInactive) {
            setTimeout(function () {
                ins.portal._component.activateToast();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastrService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ToastrService.ctorParameters = function () { return [
        { type: toastr_config_1.ToastrConfig, },
        { type: overlay_1.Overlay, },
    ]; };
    return ToastrService;
}());
exports.ToastrService = ToastrService;
