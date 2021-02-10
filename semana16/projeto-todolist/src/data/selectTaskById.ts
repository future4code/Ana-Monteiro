import { connection } from "..";

export default async function selectTaskById(
    id: string
): Promise<any>{
    const result = await connection.raw(`
        SELECT tasks.*, nickname FROM to_do_list_task AS tasks
        JOIN to_do_list_user AS users
        ON author_id = users.id
        WHERE tasks.id = '${id}';
    `)

        return result[0][0]
}