import { IArgumentError } from "./IArgumentError";

export class ArgumentEmptyError extends Error implements IArgumentError {
  public static defaultMessage = "The given argument should not be empty.";

  constructor(
    public parameterName: string,
    public message: string = ArgumentEmptyError.defaultMessage
  ) {
    super(`${message} Parameter: ${parameterName}`);

    this.name = "ArgumentEmptyError";
    this.stack = (<any>new Error()).stack;
  }
}
