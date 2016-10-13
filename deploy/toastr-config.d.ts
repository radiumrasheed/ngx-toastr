import { EventEmitter } from '@angular/core';
import { Toast } from './toast-component';
export declare class ToastConfig {
    closeButton: boolean;
    extendedTimeOut: number;
    onHidden: EventEmitter<any>;
    onShown: EventEmitter<any>;
    onTap: EventEmitter<any>;
    progressBar: boolean;
    timeOut: number;
    toastClass: string;
    positionClass: string;
    titleClass: string;
    messageClass: string;
    tapToDismiss: boolean;
    toastComponent: typeof Toast;
    constructor(config?: any);
}
export declare class ToastrConfig extends ToastConfig {
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
    constructor(config?: any);
}
