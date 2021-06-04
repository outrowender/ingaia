export interface IHttpRequest {
    body?: any
}

export interface IHttpResponse<T = any> {
    statusCode: number
    body: T
}