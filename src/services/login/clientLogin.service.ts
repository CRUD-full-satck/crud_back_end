import { ClientLoginProps } from "../../interfaces";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const clientLoginService = async ({
  email,
  password,
}: ClientLoginProps): Promise<string> => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ email });
  if (!client) throw new AppError("Email or Password invalid", 403);

  const validatePassword = await compare(password, client.password);
  if (!validatePassword) throw new AppError("Email or Password invalid", 403);

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "2h",
    subject: client.id,
  });

  return token;
};

export default clientLoginService;
