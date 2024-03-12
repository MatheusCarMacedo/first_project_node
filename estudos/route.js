const express = require("express")  //importando o express

const server = express()  // variavel pra facilitar
const port = 3001




// Route params => /users/2    //buscar,deletar ou atualizar algo especifico



server.get("/users/:id", (request,response) => { //criando rota

    const { id } = request.params

    console.log(id)

return response.json({id})



})


server.listen(port, ()=>{

console.log(`server iniciando na porta  ${port}`)


}) //adicionar porta. recomendado porta de 300mil+









