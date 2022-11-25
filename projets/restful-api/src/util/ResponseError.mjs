
export default class ResponseError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

function responseErrorFactory(name, statusCode) {
    return class extends ResponseError{
        constructor(message) {
            super(message, statusCode);
            this.name = name;
        }
    }
}

export const StatusCode = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
};

export const BadRequestError = responseErrorFactory('Bad Request', StatusCode.BAD_REQUEST);
export const NotFoundError = responseErrorFactory('Not found', StatusCode.NOT_FOUND);
export const InternalServerError = responseErrorFactory('Internal Error', StatusCode.INTERNAL_ERROR);
