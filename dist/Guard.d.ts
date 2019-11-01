import { IGuardSettings } from "./models/GuardSettings";
import { IArgumentError } from "./errors/IArgumentError";
/**
 * Guard class
 */
export declare class Guard {
    /**
     * Checks wether a given argument is undefined or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
    static argumentNotUndefined(arg: any, parameterName: string, settings?: IGuardSettings, message?: string, callback?: Function): boolean | IArgumentError;
    /**
     * Checks wether a given argument is null or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
    static argumentNotNull(arg: any, parameterName: string, settings?: IGuardSettings, message?: string, callback?: Function): boolean | IArgumentError;
    /**
     * Checks wether a given argument is empty or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
    static argumentEmpty(arg: any, parameterName: string, settings?: IGuardSettings, message?: string, callback?: Function): boolean | IArgumentError;
    /**
     * Checks wether a given argument is valid or not.
     * @param arg given argument
     * @param parameterName the parameter name
     * @param settings the settings = has a default value
     * @param message custom message - optional
     * @param callback callback on error - optional
     */
    static argumentNotValid(arg: any, parameterName: string, settings?: IGuardSettings, message?: string, callback?: Function): boolean | IArgumentError;
    private static checkArgument;
}
