import {connection} from "../index"

export const selectAllUsers = async():Promise<any> => {
    const result = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)
 
    return result[0]
 }

 export const selectAllNames = async(name: string):Promise<any> => {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      WHERE name LIKE "%${name}%";
   `)

   return result[0]
}

export const selectAllTypes = async(type: string):Promise<any> => {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
     WHERE type LIKE '%${type}%';
   `)

   return result[0]
}

export const selectOrder = async(type: string, order: string):Promise<any> => {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio
      ORDER BY ${type} ${order};
   `)

   return result[0]
}


