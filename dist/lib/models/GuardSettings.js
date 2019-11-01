"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GuardSettings = /** @class */ (function () {
    function GuardSettings(doNotThrow, useCallback) {
        if (doNotThrow === void 0) { doNotThrow = false; }
        if (useCallback === void 0) { useCallback = false; }
        this.doNotThrow = doNotThrow;
        this.useCallback = !doNotThrow && useCallback;
    }
    return GuardSettings;
}());
exports.GuardSettings = GuardSettings;
exports.defaultGuardSettings = new GuardSettings();
