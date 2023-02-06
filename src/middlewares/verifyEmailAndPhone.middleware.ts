import { NextFunction, Request, Response } from "express";
import dataSource from "../data-source";
import { Client } from "../entities/client.entitie";
import { Contact } from "../entities/contact.entitie";
import { EmailAndPasswordProps } from "../interfaces";
import { ContactProps, ClientProps } from "../interfaces/index";

const verifyEmailAndPhoneMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { phone, email }: EmailAndPasswordProps = req.body;

  const contactRepository = dataSource.getRepository(Contact);
  const contact = await contactRepository.find();
  const clientRepository = dataSource.getRepository(Client);
  const client = await clientRepository.find();

  const array = [...contact, ...client];

  if (!!email) {
    if (
      array.find((elem) => {
        return elem.email === email;
      })
    ) {
      return res.status(401).json({
        message: "Email already registered",
      });
    }
  }

  if (!!phone) {
    if (
      array.find((elem) => {
        return elem.phone === phone;
      })
    ) {
      return res.status(401).json({
        message: "Phone already registered",
      });
    }
  }

  return next();
};

export default verifyEmailAndPhoneMiddleware;
