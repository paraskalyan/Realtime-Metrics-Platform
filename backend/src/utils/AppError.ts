export class APIError extends Error {
  public readonly status: number;

  constructor(status: number, message: string) {
    super(message);

    this.name = this.constructor.name;
    this.status = status;

    Error.captureStackTrace?.(this, this.constructor);
  }
}

export class BadRequestError extends APIError {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}

export class UnauthorizedError extends APIError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}

export class ForbiddenError extends APIError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}

export class NotFoundError extends APIError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}

export class MethodNotAllowedError extends APIError {
  constructor(message = "Method Not Allowed") {
    super(405, message);
  }
}

export class ConflictError extends APIError {
  constructor(message = "Conflict") {
    super(409, message);
  }
}

export class UnsupportedMediaTypeError extends APIError {
  constructor(message = "Unsupported Media Type") {
    super(415, message);
  }
}

export class UnprocessableEntityError extends APIError {
  constructor(message = "Unprocessable Entity") {
    super(422, message);
  }
}

export class InternalServerError extends APIError {
  constructor(message = "Internal Server Error") {
    super(500, message);
  }
}