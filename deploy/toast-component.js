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
var toastr_service_1 = require('./toastr-service');
var Toast = (function () {
    function Toast(toastrService) {
        this.toastrService = toastrService;
        // used to control animation
        this.state = 'inactive';
        this.width = 100;
        this.toastClasses = '';
    }
    Toast.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
        clearTimeout(this.removealTimeout);
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
        this.removealTimeout = setTimeout(function () { return _this.toastrService.remove(_this.toastId); }, 300);
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.timeOut > 0 || this.options.extendedTimeOut > 0) {
            this.width = 100;
            this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
            this.options.timeOut = +this.options.extendedTimeOut;
            this.hideTime = new Date().getTime() + this.options.timeOut;
        }
    };
    Toast.prototype.stickAround = function () {
        clearTimeout(this.timeout);
        this.hideTime = 0;
        // todo: stop hiding?
        // clearTimeout(this.removealTimeout);
        // this.state = 'active';
    };
    Toast = __decorate([
        core_1.Component({
            selector: '[toast-component]',
            template: "\n  <!-- button html -->\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">{{title}}</div>\n  <div *ngIf=\"message\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n    {{message}}\n  </div>\n  <!--TODO: allow html\n  <div ng-switch on=\"allowHtml\">\n    <div ng-switch-when=\"true\" ng-if=\"title\" class=\"{{titleClass}}\" ng-bind-html=\"title\"></div>\n    <div ng-switch-when=\"true\" class=\"{{messageClass}}\" ng-bind-html=\"message\"></div>\n  </div>\n  -->\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
            host: {
                '(click)': 'tapToast()',
                '(mouseover)': 'stickAround()',
                '(mouseout)': 'delayedHideToast()',
                '[@flyInOut]': 'state',
                '[class]': 'toastClasses',
            },
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
        }), 
        __metadata('design:paramtypes', [toastr_service_1.ToastrService])
    ], Toast);
    return Toast;
}());
exports.Toast = Toast;
//# sourceMappingURL=/Users/scoope7/toastr-ng2/src/lib/toast-component.js.map