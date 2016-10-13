import { ViewContainerRef } from '@angular/core';
import { Overlay } from './overlay/overlay';
import { OverlayRef } from './overlay/overlay-ref';
import { ToastConfig, ToastrConfig } from './toastr-config';
export interface ActiveToast {
    toastId: number;
    message: string;
    portal?: any;
    overlayRef?: OverlayRef;
}
export declare class ToastrService {
    toastrConfig: ToastrConfig;
    private overlay;
    viewContainerRef: ViewContainerRef;
    private index;
    private toasts;
    private previousToastMessage;
    constructor(toastrConfig: ToastrConfig, overlay: Overlay);
    success(message: string, title?: string, optionsOverride?: ToastConfig): ActiveToast;
    error(message: string, title?: string, optionsOverride?: ToastConfig): ActiveToast;
    info(message: string, title?: string, optionsOverride?: ToastConfig): ActiveToast;
    warning(message: string, title?: string, optionsOverride?: ToastConfig): ActiveToast;
    clear(toastId?: number): void;
    remove(toastId: number): boolean;
    private _findToast(toastId);
    private isDuplicate(message);
    private _buildNotification(type, message, title, optionsOverride?);
}
