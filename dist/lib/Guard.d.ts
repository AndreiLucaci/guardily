import { IGuardSettings } from "./models/GuardSettings";
import { IArgumentError } from "./errors/IArgumentError";
export declare class Guard {
    static argumentNotUndefined(arg: any, parameterName: string, settings?: IGuardSettings, message?: string, callback?: Function): boolean | IArgumentError;
    static argumentNotNull(arg: any, parameterName: string, settings?: IGuardSettings, message?: string, callback?: Function): boolean | IArgumentError;
    private static checkArgument;
}
