import { Subject } from 'rxjs/Subject';
import { ComponentType } from './portal/portal';
/**
 * Configuration for an individual toast.
 */
export declare class ToastConfig {
    closeButton?: boolean;
    extendedTimeOut?: number;
    progressBar?: boolean;
    timeOut?: number;
    enableHtml?: boolean;
    toastClass?: string;
    positionClass?: string;
    titleClass?: string;
    messageClass?: string;
    tapToDismiss?: boolean;
    toastComponent?: ComponentType<any>;
    onActivateTick?: boolean;
    constructor(config?: ToastConfig);
}
export declare class ToastrIconClasses {
    error?: string;
    info?: string;
    success?: string;
    warning?: string;
}
/**
 * Global Toast configuration
 */
export declare class ToastrConfig extends ToastConfig {
    maxOpened?: number;
    autoDismiss?: boolean;
    iconClasses?: ToastrIconClasses;
    newestOnTop?: boolean;
    preventDuplicates?: boolean;
    constructor(config?: ToastrConfig);
}
export declare class ToastData {
    toastId: number;
    optionsOverride: ToastConfig;
    message: string;
    title: string;
    toastType: string;
    onTap: Subject<any>;
}
