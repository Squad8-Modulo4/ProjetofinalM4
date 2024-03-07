export class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadRequestError extends ApiError {
  constructor(message, errors) {
    super(message, 400);
    this.errors = errors;
  }
}

export class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message) {
    super(message, 401);
  }
}
