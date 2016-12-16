"use strict";
var core_1 = require('@angular/core');
var toastr_service_1 = require('./toastr-service');
var Toast = (function () {
    function Toast(toastrService) {
        this.toastrService = toastrService;
        // used to control width of progress bar
        this.width = 100;
        this.toastClasses = '';
        this.state = 'inactive';
    }
    Toast.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
        clearTimeout(this.removalTimeout);
    };
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        this.options.onShown.emit(null);
        this.options.timeOut = +this.options.timeOut;
        this.toastClasses = this.toastType + " " + this.options.toastClass;
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
    };
    Toast.prototype.updateProgress = function () {
        if (this.width === 0) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    Toast.prototype.tapToast = function () {
        this.options.onTap.emit(null);
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        this.options.onHidden.emit(null);
        this.state = 'removed';
        this.removalTimeout = setTimeout(function () { return _this.toastrService.remove(_this.toastId); }, 300);
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0) {
            return;
        }
        this.width = 100;
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
    };
    Toast.prototype.stickAround = function () {
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.options.progressBar = false;
    };
    Toast.decorators = [
        { type: core_1.Component, args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n    {{title}}\n  </div>\n  <div *ngIf=\"message\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n    {{message}}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
                    animations: [
                        core_1.trigger('flyInOut', [
                            core_1.state('inactive', core_1.style({
                                display: 'none',
                                opacity: 0
                            })),
                            core_1.state('active', core_1.style({
                                opacity: 1
                            })),
                            core_1.state('removed', core_1.style({
                                opacity: 0
                            })),
                            core_1.transition('inactive <=> active', core_1.animate('300ms ease-in')),
                            core_1.transition('active <=> removed', core_1.animate('300ms ease-in')),
                        ]),
                    ],
                },] },
    ];
    /** @nocollapse */
    Toast.ctorParameters = function () { return [
        { type: toastr_service_1.ToastrService, },
    ]; };
    Toast.propDecorators = {
        'toastClasses': [{ type: core_1.HostBinding, args: ['class',] },],
        'state': [{ type: core_1.HostBinding, args: ['@flyInOut',] },],
        'tapToast': [{ type: core_1.HostListener, args: ['click',] },],
        'delayedHideToast': [{ type: core_1.HostListener, args: ['mouseleave',] },],
        'stickAround': [{ type: core_1.HostListener, args: ['mouseenter',] },],
    };
    return Toast;
}());
exports.Toast = Toast;
