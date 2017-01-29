import { Component, trigger, state, transition, animate, style, HostBinding, HostListener, ApplicationRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastData } from './toastr-config';
import { ToastrService } from './toastr-service';
import { ToastRef } from './toast-injector';
export var Toast = (function () {
    function Toast(toastrService, data, toastRef, appRef, sanitizer) {
        var _this = this;
        this.toastrService = toastrService;
        this.data = data;
        this.toastRef = toastRef;
        this.appRef = appRef;
        // used to control width of progress bar
        this.width = 100;
        this.toastClasses = '';
        this.state = 'inactive';
        this.options = data.optionsOverride;
        this.toastId = data.toastId;
        this.message = data.message;
        if (this.message && this.options.enableHtml) {
            this.message = sanitizer.bypassSecurityTrustHtml(data.message);
        }
        this.title = data.title;
        this.toastType = data.toastType;
        this.onTap = data.onTap;
        this.sub = toastRef.afterActivate().subscribe(function (n) {
            _this.activateToast();
        });
    }
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
        clearTimeout(this.removalTimeout);
    };
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
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
        if (this.options.onActivateTick) {
            this.appRef.tick();
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
        this.onTap.next();
        this.onTap.complete();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
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
        { type: Component, args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n    {{title}}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n    {{message}}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
                    animations: [
                        trigger('flyInOut', [
                            state('inactive', style({
                                display: 'none',
                                opacity: 0
                            })),
                            state('active', style({
                                opacity: 1
                            })),
                            state('removed', style({
                                opacity: 0
                            })),
                            transition('inactive <=> active', animate('300ms ease-in')),
                            transition('active <=> removed', animate('300ms ease-in')),
                        ]),
                    ],
                },] },
    ];
    /** @nocollapse */
    Toast.ctorParameters = function () { return [
        { type: ToastrService, },
        { type: ToastData, },
        { type: ToastRef, },
        { type: ApplicationRef, },
        { type: DomSanitizer, },
    ]; };
    Toast.propDecorators = {
        'toastClasses': [{ type: HostBinding, args: ['class',] },],
        'state': [{ type: HostBinding, args: ['@flyInOut',] },],
        'tapToast': [{ type: HostListener, args: ['click',] },],
        'delayedHideToast': [{ type: HostListener, args: ['mouseleave',] },],
        'stickAround': [{ type: HostListener, args: ['mouseenter',] },],
    };
    return Toast;
}());
