import { connection } from "..";

export default async function selectUserById(
    id: string
){
    const result = await connection('To_do_list_user')
    .select('*')
    .where({id})

    return result[0]
}