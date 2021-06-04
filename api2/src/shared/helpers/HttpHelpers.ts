import { IHttpResponse } from "../interfaces/IHttp"

export const ok = (data: any): IHttpResponse => ({
    statusCode: 200,
    body: data
})

export const badRequest = (error: Error): IHttpResponse => ({
    statusCode: 400,
    body: error.message
})

export const notFound = (error: Error): IHttpResponse => ({
    statusCode: 404,
    body: error.message
})

export const unprocessableEntity = (error: Error): IHttpResponse => ({
    statusCode: 422,
    body: error.message
})

