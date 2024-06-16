import { Request, Response } from 'express';

interface TypedRequest<ReqBody = any> extends Request {
  body: ReqBody;
}

interface TypedResponse<ResBody = any> extends Response {
  json(data: ResBody): this;
}
export { TypedRequest, TypedResponse };

