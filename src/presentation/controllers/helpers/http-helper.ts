import { HttpResponse } from "../ports/http";

export const badRequest = (errorMessage: string): HttpResponse => ({
    body: {
        message: errorMessage
    },
    statusCode: 400
});

export const internalServerError = (): HttpResponse => ({
    body: {
        message: "Internal Server Error"
    },
    statusCode: 500
});

export const ok = (message: string): HttpResponse => ({
    body: {
        message: message
    },
    statusCode: 200
});