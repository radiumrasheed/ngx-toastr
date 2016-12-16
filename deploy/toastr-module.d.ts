import { ModuleWithProviders, OpaqueToken } from '@angular/core';
import { ToastrConfig, GlobalToastConfig } from './toastr-config';
export declare const TOAST_CONFIG: OpaqueToken;
export declare function provideToastrConfig(config: GlobalToastConfig): ToastrConfig;
export declare class ToastrModule {
    static forRoot(config?: GlobalToastConfig): ModuleWithProviders;
}
