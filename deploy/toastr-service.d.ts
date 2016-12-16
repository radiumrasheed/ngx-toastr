import { Overlay } from './overlay/overlay';
import { OverlayRef } from './overlay/overlay-ref';
import { ToastConfig, ToastrConfig, SingleToastConfig } from './toastr-config';
export interface ActiveToast {
    toastId: number;
    message: string;
    portal?: any;
    overlayRef?: OverlayRef;
}
export declare class ToastrService {
    toastrConfig: ToastrConfig;
    private overlay;
    private index;
    private toasts;
    private previousToastMessage;
    private currentlyActive;
    constructor(toastrConfig: ToastrConfig, overlay: Overlay);
    success(message: string, title?: string, optionsOverride?: SingleToastConfig | ToastConfig): ActiveToast;
    error(message: string, title?: string, optionsOverride?: SingleToastConfig | ToastConfig): ActiveToast;
    info(message: string, title?: string, optionsOverride?: SingleToastConfig | ToastConfig): ActiveToast;
    warning(message: string, title?: string, optionsOverride?: SingleToastConfig | ToastConfig): ActiveToast;
    createToastConfig(optionsOverride: SingleToastConfig | ToastConfig): ToastConfig;
    clear(toastId?: number): void;
    remove(toastId: number): boolean;
    private _findToast(toastId);
    private isDuplicate(message);
    private _buildNotification(type, message, title, optionsOverride?);
}
