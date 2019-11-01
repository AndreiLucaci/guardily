import { IArgumentError } from "./IArgumentError";
export declare class ArgumentNotValidError extends Error implements IArgumentError {
    parameterName: string;
    message: string;
    static defaultMessage: string;
    constructor(parameterName: string, message?: string);
}
