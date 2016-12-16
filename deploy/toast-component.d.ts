import { OnDestroy } from '@angular/core';
import { ToastConfig } from './toastr-config';
import { ToastrService } from './toastr-service';
export declare class Toast implements OnDestroy {
    private toastrService;
    toastId: number;
    message: string;
    title: string;
    toastType: string;
    options: ToastConfig;
    timeout: any;
    removalTimeout: any;
    width: number;
    private intervalId;
    private hideTime;
    toastClasses: string;
    state: string;
    constructor(toastrService: ToastrService);
    ngOnDestroy(): void;
    activateToast(): void;
    updateProgress(): void;
    tapToast(): void;
    remove(): void;
    delayedHideToast(): void;
    stickAround(): void;
}
