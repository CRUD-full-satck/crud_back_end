import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"

const verifyAuthTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization
    if (!token) {
        return res.status(401).json({
            message: "Missing token"
        })
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY as string, (err: any, decoded: any) => {
        if(err) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }

        req.client = {
            id: decoded.sub
        }
        return next()
    })
}

export default verifyAuthTokenMiddleware