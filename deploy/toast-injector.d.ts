import { Injector } from '@angular/core';
import { OverlayRef } from './overlay/overlay-ref';
import { Observable } from 'rxjs/Observable';
import { ToastData } from './toastr-config';
/**
 * Reference to a dialog opened via the MdDialog service.
 */
export declare class ToastRef<T> {
    private _overlayRef;
    /** The instance of component opened into the dialog. */
    componentInstance: T;
    /** Subject for notifying the user that the dialog has finished closing. */
    private _afterClosed;
    private _activate;
    constructor(_overlayRef: OverlayRef);
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    close(): void;
    /** Gets an observable that is notified when the dialog is finished closing. */
    afterClosed(): Observable<any>;
    activate(): void;
    /** Gets an observable that is notified when the dialog has started opening. */
    afterActivate(): Observable<any>;
}
/** Custom injector type specifically for instantiating components with a dialog. */
export declare class ToastInjector implements Injector {
    private _dialogRef;
    private _data;
    private _parentInjector;
    constructor(_dialogRef: ToastRef<any>, _data: ToastData, _parentInjector: Injector);
    get(token: any, notFoundValue?: any): any;
}
