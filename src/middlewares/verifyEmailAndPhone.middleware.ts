import { NextFunction, Request, Response } from "express";
import dataSource from "../data-source";
import { Client } from "../entities/client.entitie";
import { Contact } from "../entities/contact.entitie";

const verifyEmailAndPhoneMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactRepository = dataSource.getRepository(Contact);
  const contact = await contactRepository.find();
  const clientRepository = dataSource.getRepository(Client);
  const client = await clientRepository.find();

  const array = [...contact, ...client];

  const { phone, email } = req.body;

  for (let i = 0; i <= array.length; i++) {
    if (array[i].email === email) {
      return res.status(401).json({
        message: "Email already registered",
      });
    }

    if (array[i].phone === phone) {
      return res.status(401).json({
        message: "Phone already registered",
      });
    }
  }

  return next();
};

export default verifyEmailAndPhoneMiddleware;
