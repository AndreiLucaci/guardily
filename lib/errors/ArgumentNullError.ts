import { IArgumentError } from "./IArgumentError";

export class ArgumentNullError extends Error implements IArgumentError {
  public static defaultMessage = "The given argument is null.";

  constructor(
    public parameterName: string,
    public message: string = ArgumentNullError.defaultMessage
  ) {
    super(`${message} Parameter: ${parameterName}`);

    this.name = "ArgumentNullError";
    this.stack = (<any>new Error()).stack;
  }
}
