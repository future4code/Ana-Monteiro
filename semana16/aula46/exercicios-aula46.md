# Exercício 1

* a) Esse método permite que envie uma query ao banco de dados.

b) 

```
const getActorByName = async (name: string): Promise<any> => {

  try { const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)

  console.log(result[0])

  return result[0]

  } catch (error) {
      console.log(error.sqlMessage || error.message)
    }
  }

getActorByName("Dinho Mamonas")

```

c) 

```

const getActorByGender = async (gender: string): Promise<any> => {
  try { const result = await connection.raw(`
    SELECT COUNT('${gender}') FROM Actor WHERE gender = '${gender}'
  `)
  console.log(result[0])
  return result[0]
  } catch (error) {
      console.log(error.sqlMessage || error.message)
    }
  }

  getActorByGender('female')

```


