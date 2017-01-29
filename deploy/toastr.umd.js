(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/platform-browser'), require('rxjs/Subject'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/platform-browser', 'rxjs/Subject', '@angular/common'], factory) :
	(factory((global.toastrng2 = global.toastrng2 || {}),global.ng.core,global.ng.platformBrowser,global.Rx,global.ng.common));
}(this, (function (exports,_angular_core,_angular_platformBrowser,rxjs_Subject,_angular_common) { 'use strict';

var __extends$1 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Wrapper around Error that sets the error message.
 * @docs-private
 */
var MdError = (function (_super) {
    __extends$1(MdError, _super);
    function MdError(value) {
        _super.call(this);
        this.message = value;
    }
    return MdError;
}(Error));
/**
 * Exception thrown when attempting to attach a null portal to a host.
 * @docs-private
 */
var NullPortalError = (function (_super) {
    __extends$1(NullPortalError, _super);
    function NullPortalError() {
        _super.call(this, 'Must provide a portal to attach');
    }
    return NullPortalError;
}(MdError));
/**
 * Exception thrown when attempting to attach a portal to a host that is already attached.
 * @docs-private
 */
var PortalAlreadyAttachedError = (function (_super) {
    __extends$1(PortalAlreadyAttachedError, _super);
    function PortalAlreadyAttachedError() {
        _super.call(this, 'Host already has a portal attached');
    }
    return PortalAlreadyAttachedError;
}(MdError));
/**
 * Exception thrown when attempting to attach a portal to an already-disposed host.
 * @docs-private
 */
var PortalHostAlreadyDisposedError = (function (_super) {
    __extends$1(PortalHostAlreadyDisposedError, _super);
    function PortalHostAlreadyDisposedError() {
        _super.call(this, 'This PortalHost has already been disposed');
    }
    return PortalHostAlreadyDisposedError;
}(MdError));
/**
 * Exception thrown when attempting to attach an unknown portal type.
 * @docs-private
 */
var UnknownPortalTypeError = (function (_super) {
    __extends$1(UnknownPortalTypeError, _super);
    function UnknownPortalTypeError() {
        _super.call(this, 'Attempting to attach an unknown Portal type. ' +
            'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.');
    }
    return UnknownPortalTypeError;
}(MdError));
/**
 * Exception thrown when attempting to attach a portal to a null host.
 * @docs-private
 */
var NullPortalHostError = (function (_super) {
    __extends$1(NullPortalHostError, _super);
    function NullPortalHostError() {
        _super.call(this, 'Attempting to attach a portal to a null PortalHost');
    }
    return NullPortalHostError;
}(MdError));
/**
 * Exception thrown when attempting to detach a portal that is not attached.
 * @docs-private
 */
var NoPortalAttachedError = (function (_super) {
    __extends$1(NoPortalAttachedError, _super);
    function NoPortalAttachedError() {
        _super.call(this, 'Attempting to detach a portal that is not attached to a host');
    }
    return NoPortalAttachedError;
}(MdError));

var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalHost`.
 */
var Portal = (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    Portal.prototype.attach = function (host, newestOnTop) {
        if (host == null) {
            throw new NullPortalHostError();
        }
        if (host.hasAttached()) {
            throw new PortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    Portal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host == null) {
            throw new NoPortalAttachedError();
        }
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
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
    Portal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function (_super) {
    __extends(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        if (viewContainerRef === void 0) { viewContainerRef = null; }
        if (injector === void 0) { injector = null; }
        _super.call(this);
        this.component = component;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
    }
    return ComponentPortal;
}(Portal));
/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    BasePortalHost.prototype.hasAttached = function () {
        return this._attachedPortal != null;
    };
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        if (portal == null) {
            throw new NullPortalError();
        }
        if (this.hasAttached()) {
            throw new PortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throw new PortalHostAlreadyDisposedError();
        }
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
    BasePortalHost.prototype.dispose = function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._isDisposed = true;
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

var __extends$2 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends$2(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        _super.call(this);
        this._hostDomElement = _hostDomElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._defaultInjector = _defaultInjector;
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
        componentRef = componentFactory.create(portal.injector || this._defaultInjector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        //
        // ApplicationRef's attachView and detachView methods are in Angular ^2.2.1 but not before.
        // The `else` clause here can be removed once 2.2.1 is released.
        if (this._appRef['attachView']) {
            this._appRef.attachView(componentRef.hostView);
            this.setDisposeFn(function () {
                _this._appRef.detachView(componentRef.hostView);
                componentRef.destroy();
            });
        }
        else {
            // When creating a component outside of a ViewContainer, we need to manually register
            // its ChangeDetector with the application. This API is unfortunately not published
            // in Angular <= 2.2.0. The change detector must also be deregistered when the component
            // is destroyed to prevent memory leaks.
            var changeDetectorRef_1 = componentRef.changeDetectorRef;
            this._appRef.registerChangeDetector(changeDetectorRef_1);
            this.setDisposeFn(function () {
                _this._appRef.unregisterChangeDetector(changeDetectorRef_1);
                // Normally the ViewContainer will remove the component's nodes from the DOM.
                // Without a ViewContainer, we need to manually remove the nodes.
                var componentRootNode = _this._getComponentRootNode(componentRef);
                if (componentRootNode.parentNode) {
                    componentRootNode.parentNode.removeChild(componentRootNode);
                }
                componentRef.destroy();
            });
        }
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
    DomPortalHost.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this._hostDomElement.parentNode !== null) {
            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
        }
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(BasePortalHost));

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
        var attachResult = this._portalHost.attach(portal, newestOnTop);
        return attachResult;
    };
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    OverlayRef.prototype.dispose = function () {
        this._portalHost.dispose();
    };
    OverlayRef.prototype.hasAttached = function () {
        return this._portalHost.hasAttached();
    };
    return OverlayRef;
}());

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

/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _injector, _ngZone) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
        this._paneElements = {};
    }
    /**
     * Creates an overlay.
     * @param state State to apply to the overlay.
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
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     * @param state
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new OverlayRef(this._createPortalHost(pane), pane, this._ngZone);
    };
    Overlay.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    Overlay.ctorParameters = function () { return [
        { type: OverlayContainer, },
        { type: _angular_core.ComponentFactoryResolver, },
        { type: _angular_core.ApplicationRef, },
        { type: _angular_core.Injector, },
        { type: _angular_core.NgZone, },
    ]; };
    return Overlay;
}());
/** Providers for Overlay and its related injectables. */

var ToastContainerDirective = (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[toastContainer]',
                    exportAs: 'toastContainer',
                },] },
    ];
    /** @nocollapse */
    ToastContainerDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
    ]; };
    return ToastContainerDirective;
}());
var ToastContainerModule = (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    ToastContainerModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    exports: [ToastContainerDirective],
                    declarations: [ToastContainerDirective],
                },] },
    ];
    /** @nocollapse */
    ToastContainerModule.ctorParameters = function () { return []; };
    return ToastContainerModule;
}());

var __extends$3 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Configuration for an individual toast.
 */
var ToastConfig = (function () {
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

/**
 * Global Toast configuration
 */
var ToastrConfig = (function (_super) {
    __extends$3(ToastrConfig, _super);
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
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    ToastrConfig.ctorParameters = function () { return [
        { type: ToastrConfig, },
    ]; };
    return ToastrConfig;
}(ToastConfig));
var ToastData = (function () {
    function ToastData() {
    }
    return ToastData;
}());

/**
 * Reference to a dialog opened via the MdDialog service.
 */
var ToastRef = (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new rxjs_Subject.Subject();
        this._activate = new rxjs_Subject.Subject();
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the dialog is finished closing. */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the dialog has started opening. */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());
/** Custom injector type specifically for instantiating components with a dialog. */
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
        if (token === ToastData && this._data) {
            return this._data;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());

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
        if (optionsOverride instanceof ToastConfig) {
            return optionsOverride;
        }
        return new ToastConfig(optionsOverride);
    };
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
    ToastrService.prototype.remove = function (toastId) {
        var _a = this._findToast(toastId), index = _a.index, activeToast = _a.activeToast;
        if (!activeToast) {
            return false;
        }
        activeToast.toastRef.close();
        this.toasts.splice(index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return;
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
            toastRef: new ToastRef(overlayRef),
        };
        ins.onShown = ins.toastRef.afterActivate();
        ins.onHidden = ins.toastRef.afterClosed();
        var data = new ToastData();
        data.toastId = ins.toastId;
        data.optionsOverride = optionsOverride;
        data.message = message;
        data.title = title;
        data.toastType = toastType;
        data.onTap = new rxjs_Subject.Subject();
        ins.onTap = data.onTap.asObservable();
        var toastInjector = new ToastInjector(ins.toastRef, data, this._injector);
        var component = new ComponentPortal(optionsOverride.toastComponent, null, toastInjector);
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
    ToastrService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    ToastrService.ctorParameters = function () { return [
        { type: ToastrConfig, },
        { type: Overlay, },
        { type: _angular_core.Injector, },
    ]; };
    return ToastrService;
}());

var Toast = (function () {
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
        { type: _angular_core.Component, args: [{
                    selector: '[toast-component]',
                    template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\">\n    &times;\n  </button>\n  <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\">\n    {{title}}\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\">\n    {{message}}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width.%]=\"width\"></div>\n  </div>\n  ",
                    animations: [
                        _angular_core.trigger('flyInOut', [
                            _angular_core.state('inactive', _angular_core.style({
                                display: 'none',
                                opacity: 0
                            })),
                            _angular_core.state('active', _angular_core.style({
                                opacity: 1
                            })),
                            _angular_core.state('removed', _angular_core.style({
                                opacity: 0
                            })),
                            _angular_core.transition('inactive <=> active', _angular_core.animate('300ms ease-in')),
                            _angular_core.transition('active <=> removed', _angular_core.animate('300ms ease-in')),
                        ]),
                    ],
                },] },
    ];
    /** @nocollapse */
    Toast.ctorParameters = function () { return [
        { type: ToastrService, },
        { type: ToastData, },
        { type: ToastRef, },
        { type: _angular_core.ApplicationRef, },
        { type: _angular_platformBrowser.DomSanitizer, },
    ]; };
    Toast.propDecorators = {
        'toastClasses': [{ type: _angular_core.HostBinding, args: ['class',] },],
        'state': [{ type: _angular_core.HostBinding, args: ['@flyInOut',] },],
        'tapToast': [{ type: _angular_core.HostListener, args: ['click',] },],
        'delayedHideToast': [{ type: _angular_core.HostListener, args: ['mouseleave',] },],
        'stickAround': [{ type: _angular_core.HostListener, args: ['mouseenter',] },],
    };
    return Toast;
}());

var TOAST_CONFIG = new _angular_core.OpaqueToken('ToastConfig');
function provideToastrConfig(config) {
    return new ToastrConfig(config);
}
var ToastrModule = (function () {
    function ToastrModule() {
    }
    ToastrModule.forRoot = function (config) {
        return {
            ngModule: ToastrModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                { provide: ToastrConfig, useFactory: provideToastrConfig, deps: [TOAST_CONFIG] },
                OverlayContainer,
                Overlay,
                ToastrService
            ]
        };
    };
    ToastrModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    imports: [_angular_common.CommonModule],
                    exports: [Toast],
                    declarations: [Toast],
                    entryComponents: [Toast],
                },] },
    ];
    /** @nocollapse */
    ToastrModule.ctorParameters = function () { return []; };
    return ToastrModule;
}());

exports.Portal = Portal;
exports.BasePortalHost = BasePortalHost;
exports.ComponentPortal = ComponentPortal;
exports.Overlay = Overlay;
exports.OverlayContainer = OverlayContainer;
exports.ToastContainerModule = ToastContainerModule;
exports.ToastContainerDirective = ToastContainerDirective;
exports.OverlayRef = OverlayRef;
exports.Toast = Toast;
exports.ToastrService = ToastrService;
exports.ToastrConfig = ToastrConfig;
exports.ToastConfig = ToastConfig;
exports.ToastrModule = ToastrModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
