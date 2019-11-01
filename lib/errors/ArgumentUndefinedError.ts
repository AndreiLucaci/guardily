import { IArgumentError } from "./IArgumentError";

export class ArgumentUndefinedError extends Error implements IArgumentError {
  public static defaultMessage = "The given argument is undefined.";

  constructor(
    public parameterName: string,
    public message: string = ArgumentUndefinedError.defaultMessage
  ) {
    super(`${message} Parameter: ${parameterName}`);

    this.name = "ArgumentUndefinedError";
    this.stack = (<any>new Error()).stack;
  }
}
