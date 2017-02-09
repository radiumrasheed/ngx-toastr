import { NgZone } from '@angular/core';
import { PortalHost, Portal } from '../portal/portal';
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
export declare class OverlayRef implements PortalHost {
    private _portalHost;
    private _pane;
    private _ngZone;
    constructor(_portalHost: PortalHost, _pane: HTMLElement, _ngZone: NgZone);
    attach(portal: Portal<any>, newestOnTop: boolean): any;
    detach(): Promise<any>;
    dispose(): void;
    hasAttached(): boolean;
}
