import { ApiResponse } from '../utils/apiResponse.js';

export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

export const notFoundHandler = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  console.error(`[Error] ${err.message}`, err.stack);

  return ApiResponse.error(
    res,
    err.message || 'Internal Server Error',
    statusCode,
    process.env.NODE_ENV === 'development' ? { stack: err.stack } : null
  );
};
