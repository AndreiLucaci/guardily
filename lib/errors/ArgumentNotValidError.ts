import { IArgumentError } from "./IArgumentError";

export class ArgumentNotValidError extends Error implements IArgumentError {
  public static defaultMessage = "The given argument is not valid.";

  constructor(
    public parameterName: string,
    public message: string = ArgumentNotValidError.defaultMessage
  ) {
    super(`${message} Parameter: ${parameterName}`);

    this.name = "ArgumentNotValidError";
    this.stack = (<any>new Error()).stack;
  }
}
