import { ModuleWithProviders, OpaqueToken } from '@angular/core';
import { ToastrConfig } from './toastr-config';
export declare const TOAST_CONFIG: OpaqueToken;
export declare function provideToastrConfig(config: ToastrConfig): ToastrConfig;
export declare class ToastrModule {
    static forRoot(config?: ToastrConfig): ModuleWithProviders;
}
