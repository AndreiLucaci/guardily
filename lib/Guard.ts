import { ArgumentUndefinedError } from "./errors/ArgumentUndefinedError";
import { IGuardSettings, defaultGuardSettings } from "./models/GuardSettings";
import { ArgumentNullError } from "./errors/ArgumentNullError";
import { IArgumentError } from "./errors/IArgumentError";
import { ArgumentEmptyError } from "./errors/ArgumentEmptyError";

/**
 * Guard class
 */
export class Guard {
  /**
   * Checks wether a given argument is undefined or not.
   * @param arg given argument
   * @param parameterName the parameter name
   * @param settings the settings = has a default value
   * @param message custom message - optional
   * @param callback callback on error - optional
   */
  static argumentNotUndefined(
    arg: any,
    parameterName: string,
    settings: IGuardSettings = defaultGuardSettings,
    message?: string,
    callback?: Function
  ): boolean | IArgumentError {
    return this.checkArgument(
      () => typeof arg === "undefined",
      () => {
        if (message) {
          throw new ArgumentUndefinedError(parameterName, message);
        } else {
          throw new ArgumentUndefinedError(parameterName);
        }
      },
      settings,
      callback
    );
  }

  /**
   * Checks wether a given argument is null or not.
   * @param arg given argument
   * @param parameterName the parameter name
   * @param settings the settings = has a default value
   * @param message custom message - optional
   * @param callback callback on error - optional
   */
  static argumentNotNull(
    arg: any,
    parameterName: string,
    settings: IGuardSettings = defaultGuardSettings,
    message?: string,
    callback?: Function
  ): boolean | IArgumentError {
    return this.checkArgument(
      () => arg === null,
      () => {
        if (message) {
          throw new ArgumentNullError(parameterName, message);
        } else {
          throw new ArgumentNullError(parameterName);
        }
      },
      settings,
      callback
    );
  }

  /**
   * Checks wether a given argument is empty or not.
   * @param arg given argument
   * @param parameterName the parameter name
   * @param settings the settings = has a default value
   * @param message custom message - optional
   * @param callback callback on error - optional
   */
  static argumentEmpty(
    arg: any,
    parameterName: string,
    settings: IGuardSettings = defaultGuardSettings,
    message?: string,
    callback?: Function
  ): boolean | IArgumentError {
    return (
      Guard.argumentNotUndefined(
        arg,
        parameterName,
        settings,
        message,
        callback
      ) &&
      Guard.argumentNotNull(arg, parameterName, settings, message, callback) &&
      this.checkArgument(
        () => {
          switch (typeof arg) {
            case "string":
              return arg === "";
            case "object":
            default:
              return Array.isArray(arg)
                ? !arg.length
                : !Object.keys(arg).length;
          }
        },
        () => {
          if (message) {
            throw new ArgumentEmptyError(parameterName, message);
          } else {
            throw new ArgumentEmptyError(parameterName);
          }
        },
        settings,
        callback
      )
    );
  }

  /**
   * Checks wether a given argument is valid or not.
   * @param arg given argument
   * @param parameterName the parameter name
   * @param settings the settings = has a default value
   * @param message custom message - optional
   * @param callback callback on error - optional
   */
  static argumentNotValid(
    arg: any,
    parameterName: string,
    settings: IGuardSettings = defaultGuardSettings,
    message?: string,
    callback?: Function
  ): boolean | IArgumentError {
    return Guard.argumentEmpty(arg, parameterName, settings, message, callback);
  }

  private static checkArgument<T extends IArgumentError>(
    condition: () => boolean,
    throwException: Function,
    settings: IGuardSettings,
    callback?: Function
  ): boolean | T {
    if (condition()) {
      if (!settings.doNotThrow) {
        throwException();
      }

      if (settings.useCallback && callback) {
        callback();
      }
    }

    return true;
  }
}
