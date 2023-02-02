import { Request, Response, NextFunction } from "express"
import { AppError } from '../errors/index';

const handleErrorMiddleware = async (err: Error, req: Request, res: Response, _:NextFunction) => {
    if( err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message
        })
    }

    return res.status(500).json({
        message: "Internal server error"
    })
}

export default handleErrorMiddleware