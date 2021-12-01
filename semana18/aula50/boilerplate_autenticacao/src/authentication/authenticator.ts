import * as jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config()

export type AuthenticationData = {
    id:string
}

  const expiresIn = "1d";

  export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn
      }
    );
    return token;
}

