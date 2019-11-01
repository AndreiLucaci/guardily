"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentUndefinedError_1 = require("./errors/ArgumentUndefinedError");
var GuardSettings_1 = require("./models/GuardSettings");
var ArgumentNullError_1 = require("./errors/ArgumentNullError");
// export interface IGuard {
//   argumentNotUndefined(
//     arg: any,
//     parameterName: string,
//     message?: string,
//     callback?: Function
//   ): boolean | IArgumentError;
//   argumentNotNull(
//     arg: any,
//     parameterName: string,
//     message?: string,
//     callback?: Function
//   ): boolean | IArgumentError;
// }
var Guard = /** @class */ (function () {
    function Guard() {
    }
    Guard.argumentNotUndefined = function (arg, parameterName, settings, message, callback) {
        if (settings === void 0) { settings = GuardSettings_1.defaultGuardSettings; }
        return this.checkArgument(function () { return typeof arg === "undefined"; }, function () {
            if (message) {
                throw new ArgumentUndefinedError_1.ArgumentUndefinedError(parameterName, message);
            }
            else {
                throw new ArgumentUndefinedError_1.ArgumentUndefinedError(parameterName);
            }
        }, settings, callback);
    };
    Guard.argumentNotNull = function (arg, parameterName, settings, message, callback) {
        if (settings === void 0) { settings = GuardSettings_1.defaultGuardSettings; }
        return this.checkArgument(function () { return arg === null; }, function () {
            if (message) {
                throw new ArgumentNullError_1.ArgumentNullError(parameterName, message);
            }
            else {
                throw new ArgumentNullError_1.ArgumentNullError(parameterName);
            }
        }, settings, callback);
    };
    Guard.checkArgument = function (condition, throwException, settings, callback) {
        if (condition()) {
            if (!settings.doNotThrow) {
                throwException();
            }
            if (settings.useCallback && callback) {
                callback();
            }
        }
        return true;
    };
    return Guard;
}());
exports.Guard = Guard;
