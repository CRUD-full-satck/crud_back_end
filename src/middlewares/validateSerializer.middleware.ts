import { NextFunction, Request, Response } from "express";
import { ValidationError } from "yup";

const validateSerializerMiddleware =
  (serialize: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await serialize.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      return next();
    } catch (err) {
      const error = err as ValidationError;
      return res.status(400).json({ message: error.errors });
    }
  };

export default validateSerializerMiddleware;
