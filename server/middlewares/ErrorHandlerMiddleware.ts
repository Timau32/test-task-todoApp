import ApiError from '../error/ApiEror';
import { TypedRequest, TypedResponse } from '../interfaces';

const errorHandler = (err: any, req: TypedRequest, res: TypedResponse, next: any) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: 'Непредвиденная ошибка!!!' });
};

export default errorHandler;
