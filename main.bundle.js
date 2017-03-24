webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row justify-content-center\">\n    <div class=\"col-lg-10 col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-block\">\n          <div class=\"row\">\n            <div class=\"col-md-5\">\n              <div class=\"form-group\">\n                <label for=\"toastTitle\">Title</label>\n                <input [(ngModel)]=\"title\" type=\"text\" class=\"form-control\" id=\"toastTitle\" placeholder=\"Toast title\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"toastMessage\">Message</label>\n                <textarea [(ngModel)]=\"message\" rows=\"3\" class=\"form-control\" id=\"toastMessage\" placeholder=\"Toast message\"></textarea>\n              </div>\n\n              <div class=\"form-group\">\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"options.enableHtml\"> Enable Html\n                  </label>\n                </div>\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"options.tapToDismiss\"> Tap to dismiss\n                  </label>\n                </div>\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"options.closeButton\"> Close button\n                  </label>\n                </div>\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"options.preventDuplicates\"> Prevent duplicates\n                  </label>\n                </div>\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"options.newestOnTop\"> New toasts on top\n                  </label>\n                </div>\n                <div class=\"checkbox\">\n                  <label>\n                    <input type=\"checkbox\" [(ngModel)]=\"options.progressBar\"> Progress bar\n                  </label>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label for=\"toastTimeout\">Timeout</label>\n                <input [(ngModel)]=\"options.timeOut\" type=\"text\" class=\"form-control\" id=\"toastTimeout\" aria-describedby=\"toastTimeoutHelp\">\n                <small id=\"toastTimeoutHelp\" class=\"form-text text-muted\">0 never expires</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"maxNumberToasts\">Maximum Toasts</label>\n                <input [(ngModel)]=\"toastrService.toastrConfig.maxOpened\" type=\"text\" class=\"form-control\" id=\"maxNumberToasts\" aria-describedby=\"maxNumberToastsHelp\">\n                <small id=\"maxNumberToastsHelp\" class=\"form-text text-muted\">0 is no limit</small>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"toastExtendedTimeout\">Extended Timeout</label>\n                <input type=\"text\" [(ngModel)]=\"toastrService.toastrConfig.extendedTimeOut\" class=\"form-control\" id=\"toastExtendedTimeout\">\n              </div>\n              <div class=\"checkbox\">\n                <label>\n                  <input type=\"checkbox\" [(ngModel)]=\"toastrService.toastrConfig.autoDismiss\"> Auto dismiss on max\n                </label>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <fieldset class=\"form-group\">\n                <label>Toast type</label>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"typeRadios\" [(ngModel)]=\"type\" value=\"success\">\n                    Success\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"typeRadios\" [(ngModel)]=\"type\" value=\"info\">\n                    Info\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"typeRadios\" [(ngModel)]=\"type\" value=\"warning\">\n                    Warning\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"typeRadios\" [(ngModel)]=\"type\" value=\"error\">\n                    Error\n                  </label>\n                </div>\n              </fieldset>\n              <fieldset class=\"form-group\">\n                <label>Toast position</label>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-right\">\n                    Top Right\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-right\">\n                    Bottom Right\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-left\">\n                    Bottom Left\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-left\">\n                    Top Left\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-full-width\">\n                    Top Full Width\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-full-width\">\n                    Bottom Full Width\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-top-center\">\n                    Top Center\n                  </label>\n                </div>\n                <div class=\"radio\">\n                  <label>\n                    <input type=\"radio\" name=\"positionRadio\" [(ngModel)]=\"options.positionClass\" value=\"toast-bottom-center\">\n                    Bottom Center\n                  </label>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col text-center\">\n              <button (click)=\"openToast()\" class=\"btn btn-primary\">Open Toast</button>\n              <button (click)=\"clearLastToast()\" class=\"btn btn-secondary\">Clear Last Toast</button>\n              <button (click)=\"clearToasts()\" class=\"btn btn-secondary\">Clear All Toasts</button>\n              <button (click)=\"openPinkToast()\" class=\"btn btn-pink\">Custom Pink Toast</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      Demo using <a href=\"https://angular.io/\">Angular</a> {{ version.full }}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_component__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastConfig; });
/* unused harmony export ToastrIconClasses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ToastrConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastData; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable:no-inferrable-types */


/**
 * Configuration for an individual toast.
 */
var ToastConfig = (function () {
    function ToastConfig(config) {
        if (config === void 0) { config = {}; }
        /** show close button */
        this.closeButton = false;
        /** time to close after a user hovers over toast */
        this.extendedTimeOut = 1000;
        /** show progress bar */
        this.progressBar = false;
        /** time to live */
        this.timeOut = 5000;
        /** allow html in message */
        this.enableHtml = false;
        this.toastClass = 'toast';
        this.positionClass = 'toast-top-right';
        this.titleClass = 'toast-title';
        this.messageClass = 'toast-message';
        /** clicking on toast dismisses it */
        this.tapToDismiss = true;
        /** the Angular component to be shown */
        this.toastComponent = __WEBPACK_IMPORTED_MODULE_1__toast_component__["a" /* Toast */];
        /** Helps show toast from a websocket or from event outside Angular */
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
        if (config.tapToDismiss !== undefined) {
            this.tapToDismiss = config.tapToDismiss;
        }
        this.toastComponent = config.toastComponent || this.toastComponent;
        this.onActivateTick = config.onActivateTick || this.onActivateTick;
    }
    return ToastConfig;
}());

var ToastrIconClasses = (function () {
    function ToastrIconClasses() {
    }
    return ToastrIconClasses;
}());
ToastrIconClasses = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], ToastrIconClasses);

/**
 * Global Toast configuration
 */
var ToastrConfig = (function (_super) {
    __extends(ToastrConfig, _super);
    function ToastrConfig(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, config) || this;
        /** max toasts opened. Toasts will be queued */
        _this.maxOpened = 0;
        /** dismiss current toast when max is reached */
        _this.autoDismiss = false;
        _this.iconClasses = {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
        };
        /** new toast placement */
        _this.newestOnTop = true;
        /** block duplicate messages */
        _this.preventDuplicates = false;
        _this.maxOpened = config.maxOpened || _this.maxOpened;
        _this.autoDismiss = config.autoDismiss || _this.autoDismiss;
        if (config.iconClasses) {
            _this.iconClasses.error = _this.iconClasses.error || config.iconClasses.error;
            _this.iconClasses.info = _this.iconClasses.info || config.iconClasses.info;
            _this.iconClasses.success = _this.iconClasses.success || config.iconClasses.success;
            _this.iconClasses.warning = _this.iconClasses.warning || config.iconClasses.warning;
        }
        _this.newestOnTop = config.newestOnTop || _this.newestOnTop;
        _this.preventDuplicates = config.preventDuplicates || _this.preventDuplicates;
        return _this;
    }
    return ToastrConfig;
}(ToastConfig));
ToastrConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [ToastrConfig])
], ToastrConfig);

var ToastData = (function () {
    function ToastData() {
    }
    return ToastData;
}());

//# sourceMappingURL=toastr-config.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayContainer; });
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());

//# sourceMappingURL=overlay-container.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_ref__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__overlay_container__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Overlay; });
/* unused harmony export OVERLAY_PROVIDERS */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _ngZone) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._ngZone = _ngZone;
        this._paneElements = {};
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_1__portal_dom_portal_host__["a" /* DomPortalHost */](pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new __WEBPACK_IMPORTED_MODULE_2__overlay_ref__["a" /* OverlayRef */](this._createPortalHost(pane), pane, this._ngZone);
    };
    return Overlay;
}());
Overlay = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* ComponentFactoryResolver */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ApplicationRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgZone */]) === "function" && _d || Object])
], Overlay);

/** Providers for Overlay and its related injectables. */
var OVERLAY_PROVIDERS = [
    Overlay,
    __WEBPACK_IMPORTED_MODULE_3__overlay_container__["a" /* OverlayContainer */],
];
var _a, _b, _c, _d;
//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BasePortalHost; });
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function () {
    function ComponentPortal(component, viewContainerRef, injector) {
        if (viewContainerRef === void 0) { viewContainerRef = null; }
        if (injector === void 0) { injector = null; }
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    ComponentPortal.prototype.detach = function () {
        var host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());

/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
    }
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

//# sourceMappingURL=portal.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toastr_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_injector__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Toast = (function () {
    function Toast(toastrService, data, toastRef, appRef, sanitizer) {
        var _this = this;
        this.toastrService = toastrService;
        this.data = data;
        this.toastRef = toastRef;
        this.appRef = appRef;
        this.sanitizer = sanitizer;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = 'inactive';
        this.options = data.optionsOverride;
        this.toastId = data.toastId;
        this.message = data.message;
        if (this.message && this.options.enableHtml) {
            this.message = sanitizer.bypassSecurityTrustHtml(data.message);
        }
        this.title = data.title;
        this.onTap = data.onTap;
        this.onAction = data.onAction;
        this.toastClasses = data.toastType + " " + this.options.toastClass;
        this.options.timeOut = +this.options.timeOut;
        this.sub = toastRef.afterActivate().subscribe(function (n) {
            _this.activateToast();
        });
    }
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
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
    /**
     * updates progress bar width
     */
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
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () { return _this.toastrService.remove(_this.toastId); }, 300);
    };
    Toast.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.onTap.next();
        this.onTap.complete();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    return Toast;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostBinding */])('class'),
    __metadata("design:type", Object)
], Toast.prototype, "toastClasses", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* HostBinding */])('@flyInOut'),
    __metadata("design:type", Object)
], Toast.prototype, "state", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Toast.prototype, "tapToast", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Toast.prototype, "stickAround", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Toast.prototype, "delayedHideToast", null);
Toast = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: '[toast-component]',
        template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n    {{title}}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n    {{message}}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* trigger */])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* state */])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                    display: 'none',
                    opacity: 0
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* state */])('removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({ opacity: 0 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('300ms ease-in')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])('active => removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('300ms ease-in')),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__toastr_service__["a" /* ToastrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__toastr_config__["a" /* ToastData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__toastr_config__["a" /* ToastData */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__toast_injector__["a" /* ToastRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__toast_injector__["a" /* ToastRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ApplicationRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], Toast);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=toast-component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toastr_config__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToastInjector; });


/**
 * Reference to a toast opened via the Toastr service.
 */
var ToastRef = (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this._activate = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    /**
     * Close the toast.
     * @param dialogResult Optional result to return to the toast opener.
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());

/** Custom injector type specifically for instantiating components with a toast. */
var ToastInjector = (function () {
    function ToastInjector(_dialogRef, _data, _parentInjector) {
        this._dialogRef = _dialogRef;
        this._data = _data;
        this._parentInjector = _parentInjector;
    }
    ToastInjector.prototype.get = function (token, notFoundValue) {
        if (token === ToastRef) {
            return this._dialogRef;
        }
        if (token === __WEBPACK_IMPORTED_MODULE_1__toastr_config__["a" /* ToastData */] && this._data) {
            return this._data;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());

//# sourceMappingURL=toast-injector.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_overlay__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portal_portal__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_injector__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToastrService = (function () {
    function ToastrService(toastrConfig, overlay, _injector) {
        this.toastrConfig = toastrConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.index = 0;
        this.toasts = [];
        this.previousToastMessage = '';
        this.currentlyActive = 0;
    }
    /** show successful toast */
    ToastrService.prototype.show = function (message, title, optionsOverride, type) {
        if (type === void 0) { type = ''; }
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show successful toast */
    ToastrService.prototype.success = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show error toast */
    ToastrService.prototype.error = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show info toast */
    ToastrService.prototype.info = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    /** show warning toast */
    ToastrService.prototype.warning = function (message, title, optionsOverride) {
        var type = this.toastrConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.createToastConfig(optionsOverride));
    };
    ToastrService.prototype.createToastConfig = function (optionsOverride) {
        if (!optionsOverride) {
            return Object.create(this.toastrConfig);
        }
        if (optionsOverride instanceof __WEBPACK_IMPORTED_MODULE_4__toastr_config__["b" /* ToastConfig */]) {
            return optionsOverride;
        }
        return new __WEBPACK_IMPORTED_MODULE_4__toastr_config__["b" /* ToastConfig */](optionsOverride);
    };
    /**
     * Remove all toasts
     */
    ToastrService.prototype.clear = function (toastId) {
        // Call every toast's remove function
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            var toast = _a[_i];
            if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                    toast.portal._component.remove();
                    return;
                }
            }
            else {
                toast.portal._component.remove();
            }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    ToastrService.prototype.remove = function (toastId) {
        var _a = this._findToast(toastId), index = _a.index, activeToast = _a.activeToast;
        if (!activeToast) {
            return false;
        }
        activeToast.toastRef.close();
        this.toasts.splice(index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].portal;
            if (p._component.state === 'inactive') {
                this.currentlyActive = this.currentlyActive + 1;
                this.toasts[this.currentlyActive].toastRef.activate();
            }
        }
        return true;
    };
    /**
     * Find toast object by id
     */
    ToastrService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return { index: null, activeToast: null };
    };
    /**
     * Determines if toast message is already shown
     */
    ToastrService.prototype.isDuplicate = function (message) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /**
     * Creates and attaches toast data to component
     */
    ToastrService.prototype._buildNotification = function (toastType, message, title, optionsOverride) {
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
        var overlayRef = this.overlay.create(optionsOverride.positionClass, this.overlayContainer);
        var ins = {
            toastId: this.index++,
            message: message,
            toastRef: new __WEBPACK_IMPORTED_MODULE_5__toast_injector__["a" /* ToastRef */](overlayRef),
        };
        ins.onShown = ins.toastRef.afterActivate();
        ins.onHidden = ins.toastRef.afterClosed();
        var data = new __WEBPACK_IMPORTED_MODULE_4__toastr_config__["a" /* ToastData */]();
        data.toastId = ins.toastId;
        data.optionsOverride = optionsOverride;
        data.message = message;
        data.title = title;
        data.toastType = toastType;
        data.onTap = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        ins.onTap = data.onTap.asObservable();
        data.onAction = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        ins.onAction = data.onAction.asObservable();
        var toastInjector = new __WEBPACK_IMPORTED_MODULE_5__toast_injector__["b" /* ToastInjector */](ins.toastRef, data, this._injector);
        var component = new __WEBPACK_IMPORTED_MODULE_3__portal_portal__["a" /* ComponentPortal */](optionsOverride.toastComponent, null, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    return ToastrService;
}());
ToastrService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__toastr_config__["c" /* ToastrConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__toastr_config__["c" /* ToastrConfig */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__overlay_overlay__["a" /* Overlay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__overlay_overlay__["a" /* Overlay */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Injector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Injector */]) === "function" && _c || Object])
], ToastrService);

var _a, _b, _c;
//# sourceMappingURL=toastr-service.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal_portal__ = __webpack_require__(33);
/* unused harmony reexport BasePortalHost */
/* unused harmony reexport ComponentPortal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overlay_overlay__ = __webpack_require__(32);
/* unused harmony reexport Overlay */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__overlay_overlay_container__ = __webpack_require__(31);
/* unused harmony reexport OverlayContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toast_directive__ = __webpack_require__(92);
/* unused harmony reexport ToastContainerModule */
/* unused harmony reexport ToastContainerDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__overlay_overlay_ref__ = __webpack_require__(56);
/* unused harmony reexport OverlayRef */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_component__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__toast_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toastr_service__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_6__toastr_service__["a"]; });
/* unused harmony reexport ActiveToast */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toastr_config__ = __webpack_require__(16);
/* unused harmony reexport ToastrConfig */
/* unused harmony reexport ToastConfig */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__toastr_config__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toastr_module__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__toastr_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toast_injector__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__toast_injector__["a"]; });










//# sourceMappingURL=toastr.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PinkToast; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PinkToast = (function (_super) {
    __extends(PinkToast, _super);
    // constructor is only necessary when not using AoT
    function PinkToast(toastrService, data, toastRef, appRef, sanitizer) {
        var _this = _super.call(this, toastrService, data, toastRef, appRef, sanitizer) || this;
        _this.toastrService = toastrService;
        _this.data = data;
        _this.toastRef = toastRef;
        _this.appRef = appRef;
        _this.sanitizer = sanitizer;
        // used for demo purposes
        _this.undoString = 'undo';
        return _this;
    }
    PinkToast.prototype.action = function (event) {
        event.stopPropagation();
        this.undoString = 'undid';
        this.onAction.next(this.undoString);
        this.onAction.complete();
        return false;
    };
    return PinkToast;
}(__WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* Toast */]));
PinkToast = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: '[pink-toast-component]',
        styles: ["\n    :host {\n      background-color: #FF69B4;\n      position: relative;\n      overflow: hidden;\n      margin: 0 0 6px;\n      padding: 10px 10px 10px 10px;\n      width: 300px;\n      border-radius: 3px 3px 3px 3px;\n      color: #FFFFFF;\n    }\n  "],
        template: "\n  <div class=\"row\">\n    <div class=\"col-9\">\n      <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n        {{title}}\n      </div>\n      <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\"></div>\n      <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n        {{message}}\n      </div>\n    </div>\n    <div class=\"col-3 text-right\">\n      <a *ngIf=\"!options.closeButton\" class=\"btn btn-pink btn-sm\" (click)=\"action($event)\">\n        {{undoString}}\n      </a>\n      <a *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"btn btn-pink btn-sm\">\n        close\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* trigger */])('flyInOut', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])('inactive <=> active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('400ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* keyframes */])([
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                        transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                        opacity: 0,
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                        transform: 'skewX(20deg)',
                        opacity: 1,
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                        transform: 'skewX(-5deg)',
                        opacity: 1,
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                        transform: 'none',
                        opacity: 1,
                    }),
                ]))),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* transition */])('active <=> removed', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* animate */])('400ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* keyframes */])([
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                        opacity: 1,
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* style */])({
                        transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                        opacity: 0,
                    }),
                ]))),
            ]),
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["c" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["c" /* ToastrService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["d" /* ToastData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["d" /* ToastData */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["e" /* ToastRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["e" /* ToastRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ApplicationRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ApplicationRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _e || Object])
], PinkToast);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=pink.toast.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlayRef; });
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    function OverlayRef(_portalHost, _pane, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._ngZone = _ngZone;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        return this._portalHost.attach(portal, newestOnTop);
    };
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());

//# sourceMappingURL=overlay-ref.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(90);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pink_toast__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var quotes = [
    {
        title: 'Title',
        message: 'Message'
    },
    {
        title: '😃',
        message: 'Supports Emoji'
    },
    {
        title: null,
        message: 'My name is Inigo Montoya. You killed my father. Prepare to die!',
    },
    {
        title: null,
        message: 'Titles are not always needed'
    },
    {
        title: 'Title only 👊',
        message: null,
    },
    {
        title: '',
        message: "Supports Angular " + __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* VERSION */].full,
    },
];
var types = ['success', 'error', 'info', 'warning'];
var AppComponent = (function () {
    function AppComponent(toastrService) {
        this.toastrService = toastrService;
        this.title = '';
        this.type = types[0];
        this.message = '';
        this.version = __WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* VERSION */];
        this.lastInserted = [];
        // sync options to toastrservice
        // this sets the options in the demo
        this.options = this.toastrService.toastrConfig;
    }
    AppComponent.prototype.openToast = function () {
        // Clone current config so it doesn't change when ngModel updates
        var m = this.message;
        var t = this.title;
        if (!this.title.length && !this.message.length) {
            var randomMessage = quotes[__WEBPACK_IMPORTED_MODULE_1_lodash__["random"](0, quotes.length - 1)];
            m = randomMessage.message;
            t = randomMessage.title;
        }
        var opt = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.options);
        var inserted = this.toastrService[this.type](m, t, opt);
        if (inserted) {
            this.lastInserted.push(inserted.toastId);
        }
        return inserted;
    };
    AppComponent.prototype.openPinkToast = function () {
        var opt = __WEBPACK_IMPORTED_MODULE_1_lodash__["cloneDeep"](this.options);
        opt.toastComponent = __WEBPACK_IMPORTED_MODULE_3__pink_toast__["a" /* PinkToast */];
        opt.toastClass = '';
        var m = this.message;
        var t = this.title;
        if (!this.title.length && !this.message.length) {
            var randomMessage = quotes[__WEBPACK_IMPORTED_MODULE_1_lodash__["random"](0, quotes.length - 1)];
            m = randomMessage.message;
            t = randomMessage.title;
        }
        var inserted = this.toastrService.show(m, t, opt);
        if (inserted) {
            this.lastInserted.push(inserted.toastId);
        }
        return inserted;
    };
    AppComponent.prototype.clearToasts = function () {
        this.toastrService.clear();
    };
    AppComponent.prototype.clearLastToast = function () {
        this.toastrService.clear(this.lastInserted.pop());
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(150),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["c" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["c" /* ToastrService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pink_toast__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { ToastContainerModule } from '../lib/toast-directive';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pink_toast__["a" /* PinkToast */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_toastr__["a" /* ToastrModule */].forRoot(),
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_6__pink_toast__["a" /* PinkToast */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__portal__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DomPortalHost; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(__WEBPACK_IMPORTED_MODULE_0__portal__["b" /* BasePortalHost */]));

//# sourceMappingURL=dom-portal-host.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* unused harmony export ToastContainerDirective */
/* unused harmony export ToastContainerModule */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    return ToastContainerDirective;
}());
ToastContainerDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Directive */])({
        selector: '[toastContainer]',
        exportAs: 'toastContainer',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ElementRef */]) === "function" && _a || Object])
], ToastContainerDirective);

var ToastContainerModule = ToastContainerModule_1 = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule_1,
            providers: []
        };
    };
    return ToastContainerModule;
}());
ToastContainerModule = ToastContainerModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        exports: [ToastContainerDirective],
        declarations: [ToastContainerDirective],
    })
], ToastContainerModule);

var _a, ToastContainerModule_1;
//# sourceMappingURL=toast-directive.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_config__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__ = __webpack_require__(32);
/* unused harmony export TOAST_CONFIG */
/* unused harmony export provideToastrConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TOAST_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* OpaqueToken */]('ToastConfig');
function provideToastrConfig(config) {
    return new __WEBPACK_IMPORTED_MODULE_4__toastr_config__["c" /* ToastrConfig */](config);
}
var ToastrModule = ToastrModule_1 = (function () {
    function ToastrModule() {
    }
    ToastrModule.forRoot = function (config) {
        return {
            ngModule: ToastrModule_1,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                { provide: __WEBPACK_IMPORTED_MODULE_4__toastr_config__["c" /* ToastrConfig */], useFactory: provideToastrConfig, deps: [TOAST_CONFIG] },
                __WEBPACK_IMPORTED_MODULE_5__overlay_overlay_container__["a" /* OverlayContainer */],
                __WEBPACK_IMPORTED_MODULE_6__overlay_overlay__["a" /* Overlay */],
                __WEBPACK_IMPORTED_MODULE_3__toastr_service__["a" /* ToastrService */]
            ]
        };
    };
    return ToastrModule;
}());
ToastrModule = ToastrModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__toast_component__["a" /* Toast */]],
    })
], ToastrModule);

var ToastrModule_1;
//# sourceMappingURL=toastr-module.js.map

/***/ })

},[176]);
//# sourceMappingURL=main.bundle.js.map