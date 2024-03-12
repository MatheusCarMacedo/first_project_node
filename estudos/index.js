const express = require("express")  //importando o express

const server = express()  // variavel pra facilitar
const port = 3000



// QUERY PARAMS => meusite.com/user?nome=matheus&age=28 //filtros


server.get("/users", (request,response) => { //criando rota

/*const name = request.query.name
const age = request.query.age*/

const {name, age} = request.query //mesma coisa, ele procura as variaveis dentro 
    console.log(name,age)
    return response.json({name, age}) //pode fazer assim se a variavel for o mesmo nome da chave, usando só 1 valor
//return response.json({nameDeRequerimento:name, ageDeRequerimento:age}) //pegar o nome do front 
//return response.send("hello node")

})


server.listen(port, ()=>{

console.log(`server iniciando na porta  ${port}`)


}) //adicionar porta. recomendado porta de 300mil+


// Route params => /users/2    //buscar,deletar ou atualizar algo especifico








