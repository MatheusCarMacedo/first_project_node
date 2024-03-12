/*
    GET => Buscar informaçao no back end
    POST => Criar informacao no back end
    PUT/Patch => Alterar/Atualizar informacao no back end
    Delete => deletar informacao no back end

*/




const express = require("express")  //importando o express
const uuid = require("uuid")



const server = express()  // variavel pra facilitar
const port = 3000
server.use(express.json())




const users = []

server.get("/users", (request, response) => { //criando rota

    return response.json(users)


})

server.post('/users', (request, response) => { //criando rota

    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age }

    users.push(user)

    return response.status(201).json(user)


})
server.put("/users/:id", (request, response) => { //criando rota

    const { id } = request.params

    const { name, age } = request.body
    const updadeUser = { id, name, age }


    const index = users.findIndex(user => user.id === id)

  
    if (index < 0) {

        return response.status(404).json({ message: "user Not foud" })
    }

    users[index] = updadeUser

    return response.json(updadeUser)



})

server.delete("/users/:id", (request, response) => { //criando rota

    const { id } = request.params


    const index = users.findIndex(user => user.id === id)

    if (index < 0) {

        return response.status(404).json({ message: "user Not foud" })
    }

    
    users.splice(index, 1)



    return response.status(204).json()


})

server.listen(port, () => {

    console.log(`server iniciando na porta  ${port}`)


})








