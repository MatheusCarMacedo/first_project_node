const express = require("express")  //importando o express

const server = express()  // variavel pra facilitar
const port = 3002
server.use(express.json())


// body params => {"name:" "matheus", "age":}



server.get("/users", (request,response) => { //criando rota

 const { name, age} = request.body




return response.json({name,age})



})


server.listen(port, ()=>{

console.log(`server iniciando na porta  ${port}`)


}) //adicionar porta. recomendado porta de 300mil+










