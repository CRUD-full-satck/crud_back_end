import { Request, Response } from 'express'
import clientLoginService from '../services/login/clientLogin.service'

const clientLoginController = async (req: Request, res:Response) => {
    const data = req.body
    const token = await clientLoginService(data)

    return res.status(200).json({token})
}

export default clientLoginController