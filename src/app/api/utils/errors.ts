export const ERRORS = {
  BAD_REQUEST: {
    status: 400,
    message: 'Bad Request',
  },
  UNAUTHORIZED: {
    status: 401,
    message: 'Unauthorized',
  },
  FORBIDDEN: {
    status: 403,
    message: 'Forbidden',
  },
  NOT_FOUND: {
    status: 404,
    message: 'Not Found',
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Internal Server Error',
  },
};

export class OurError {
  status: number;
  message: string;

  constructor(error: keyof typeof ERRORS) {
    const { status, message } = ERRORS[error] || ERRORS.INTERNAL_SERVER_ERROR;
    this.status = status;
    this.message = message;
  }
}
