import { OnDestroy, ApplicationRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ToastConfig, ToastData } from './toastr-config';
import { ToastrService } from './toastr-service';
import { ToastRef } from './toast-injector';
export declare class Toast implements OnDestroy {
    private toastrService;
    data: ToastData;
    private toastRef;
    private appRef;
    toastId: number;
    message: string | SafeHtml;
    title: string;
    options: ToastConfig;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** controls animation */
    state: string;
    private timeout;
    private intervalId;
    private hideTime;
    private onTap;
    private sub;
    constructor(toastrService: ToastrService, data: ToastData, toastRef: ToastRef<any>, appRef: ApplicationRef, sanitizer: DomSanitizer);
    ngOnDestroy(): void;
    /**
     * activates toast and sets timeout
     */
    activateToast(): void;
    /**
     * updates progress bar width
     */
    updateProgress(): void;
    remove(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
}
