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
    state: string;
    timeout: any;
    removealTimeout: any;
    private intervalId;
    private hideTime;
    private width;
    private toastClasses;
    constructor(toastrService: ToastrService);
    ngOnDestroy(): void;
    activateToast(): void;
    updateProgress(): void;
    tapToast(): void;
    remove(): void;
    delayedHideToast(): void;
    stickAround(): void;
}
