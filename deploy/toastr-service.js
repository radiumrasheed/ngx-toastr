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
    }
    ToastrService.prototype.success = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.success;
        return this._buildNotification(type, message, title, optionsOverride);
    };
    ToastrService.prototype.error = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.error;
        return this._buildNotification(type, message, title, optionsOverride);
    };
    ToastrService.prototype.info = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.info;
        return this._buildNotification(type, message, title, optionsOverride);
    };
    ToastrService.prototype.warning = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, optionsOverride);
    };
    ToastrService.prototype.clear = function (toastId) {
        // Call every toast's remove function
        for (var i = 0; i < this.toasts.length; i++) {
            if (toastId !== undefined) {
                if (this.toasts[i].toastId === toastId) {
                    this.toasts[i].portal._hostElement.component.remove();
                    return;
                }
            }
            else {
                this.toasts[i].portal._hostElement.component.remove();
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
        if (this.toastrConfig.maxOpened &&
            this.toasts.length && this.toasts.length >= this.toastrConfig.maxOpened) {
            var p = this.toasts[0].portal;
            if (p._hostElement.component.state === 'inactive') {
                p._hostElement.component.activateToast();
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
        if (optionsOverride === void 0) { optionsOverride = Object.create(this.toastrConfig); }
        // max opened and auto dismiss = true
        if (this.toastrConfig.preventDuplicates && this.isDuplicate(message)) {
            return;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (+this.toastrConfig.maxOpened && this.toasts.length >= +this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var component = new portal_1.ComponentPortal(optionsOverride.toastComponent, this.viewContainerRef);
        var ins = {
            toastId: this.index++,
            message: message,
            overlayRef: this.overlay.create(optionsOverride.positionClass),
        };
        ins.portal = ins.overlayRef.attach(component, this.toastrConfig.newestOnTop);
        ins.portal._hostElement.component.toastId = ins.toastId;
        ins.portal._hostElement.component.message = message;
        ins.portal._hostElement.component.title = title;
        ins.portal._hostElement.component.toastType = type;
        ins.portal._hostElement.component.options = optionsOverride;
        if (!keepInactive) {
            setTimeout(function () { return ins.portal._hostElement.component.activateToast(); });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastrService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [toastr_config_1.ToastrConfig, overlay_1.Overlay])
    ], ToastrService);
    return ToastrService;
}());
exports.ToastrService = ToastrService;
//# sourceMappingURL=/Users/scoope7/toastr-ng2/src/lib/toastr-service.js.map