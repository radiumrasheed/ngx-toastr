import { ComponentFactoryResolver, ComponentRef, ApplicationRef, Injector } from '@angular/core';
import { BasePortalHost, ComponentPortal } from './portal';
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
export declare class DomPortalHost extends BasePortalHost {
    private _hostDomElement;
    private _componentFactoryResolver;
    private _appRef;
    private _defaultInjector;
    constructor(_hostDomElement: Element, _componentFactoryResolver: ComponentFactoryResolver, _appRef: ApplicationRef, _defaultInjector: Injector);
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    attachComponentPortal<T>(portal: ComponentPortal<T>, newestOnTop: boolean): ComponentRef<T>;
    dispose(): void;
    /** Gets the root HTMLElement for an instantiated component. */
    private _getComponentRootNode(componentRef);
}
