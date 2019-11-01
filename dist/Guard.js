"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgumentUndefinedError_1 = require("./errors/ArgumentUndefinedError");
var GuardSettings_1 = require("./models/GuardSettings");
var ArgumentNullError_1 = require("./errors/ArgumentNullError");
var ArgumentEmptyError_1 = require("./errors/ArgumentEmptyError");
/**
 * Guard class
 */
var Guard = /** @class */ (function () {
    function Guard() {
    }
    /**
     * Checks wether a given argument is undefined or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
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
    /**
     * Checks wether a given argument is null or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
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
    /**
     * Checks wether a given argument is empty or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
    Guard.argumentEmpty = function (arg, parameterName, settings, message, callback) {
        if (settings === void 0) { settings = GuardSettings_1.defaultGuardSettings; }
        return (Guard.argumentNotUndefined(arg, parameterName, settings, message, callback) &&
            Guard.argumentNotNull(arg, parameterName, settings, message, callback) &&
            this.checkArgument(function () {
                switch (typeof arg) {
                    case "string":
                        return arg === "";
                    case "object":
                    default:
                        return Array.isArray(arg)
                            ? !arg.length
                            : !Object.keys(arg).length;
                }
            }, function () {
                if (message) {
                    throw new ArgumentEmptyError_1.ArgumentEmptyError(parameterName, message);
                }
                else {
                    throw new ArgumentEmptyError_1.ArgumentEmptyError(parameterName);
                }
            }, settings, callback));
    };
    /**
     * Checks wether a given argument is valid or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
    Guard.argumentNotValid = function (arg, parameterName, settings, message, callback) {
        if (settings === void 0) { settings = GuardSettings_1.defaultGuardSettings; }
        return Guard.argumentEmpty(arg, parameterName, settings, message, callback);
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
