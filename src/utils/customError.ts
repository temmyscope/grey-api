export class CustomError extends Error {

  constructor(msg: string = "", ...params: any) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.message = msg;
  }

}
