export interface IGuardSettings {
  doNotThrow: boolean;
  useCallback: boolean;
}

export class GuardSettings implements IGuardSettings {
  doNotThrow: boolean;
  useCallback: boolean;

  constructor(doNotThrow: boolean = false, useCallback: boolean = false) {
    this.doNotThrow = doNotThrow;
    this.useCallback = !doNotThrow && useCallback;
  }
}

export const defaultGuardSettings: IGuardSettings = new GuardSettings();
