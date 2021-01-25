import { connection } from "../connection/dbconnection";

export const createUser = async (id: string, email: string, password: string) => {
    await connection
    .insert({
        id,
        email, 
        password,
    })
    .into("newUser")
}
