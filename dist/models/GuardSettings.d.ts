export interface IGuardSettings {
    doNotThrow: boolean;
    useCallback: boolean;
}
export declare class GuardSettings implements IGuardSettings {
    doNotThrow: boolean;
    useCallback: boolean;
    constructor(doNotThrow?: boolean, useCallback?: boolean);
}
export declare const defaultGuardSettings: IGuardSettings;
