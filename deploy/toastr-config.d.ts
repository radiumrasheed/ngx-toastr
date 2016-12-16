import { EventEmitter } from '@angular/core';
import { ComponentType } from './portal/portal';
import { Toast } from './toast-component';
export interface SingleToastConfig {
    closeButton?: boolean;
    extendedTimeOut?: number;
    onHidden?: EventEmitter<any>;
    onShown?: EventEmitter<any>;
    onTap?: EventEmitter<any>;
    progressBar?: boolean;
    timeOut?: number;
    toastClass?: string;
    positionClass?: string;
    titleClass?: string;
    messageClass?: string;
    tapToDismiss?: boolean;
    toastComponent?: ComponentType<any>;
}
/**
 * Configuration for an individual toast.
 */
export declare class ToastConfig implements SingleToastConfig {
    closeButton: boolean;
    extendedTimeOut: number;
    onHidden: EventEmitter<{}>;
    onShown: EventEmitter<{}>;
    onTap: EventEmitter<{}>;
    progressBar: boolean;
    timeOut: number;
    toastClass: string;
    positionClass: string;
    titleClass: string;
    messageClass: string;
    tapToDismiss: boolean;
    toastComponent: typeof Toast;
    constructor(config?: GlobalToastConfig);
}
export interface GlobalToastConfig extends SingleToastConfig {
    maxOpened?: number;
    autoDismiss?: boolean;
    iconClasses?: {
        error?: string;
        info?: string;
        success?: string;
        warning?: string;
    };
    newestOnTop?: boolean;
    preventDuplicates?: boolean;
}
/**
 * Global Toast configuration
 */
export declare class ToastrConfig extends ToastConfig implements GlobalToastConfig {
    maxOpened: number;
    autoDismiss: boolean;
    iconClasses: {
        error: string;
        info: string;
        success: string;
        warning: string;
    };
    newestOnTop: boolean;
    preventDuplicates: boolean;
    constructor(config?: GlobalToastConfig);
}
