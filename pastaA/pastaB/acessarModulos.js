const moduloA = require('../../moduloA')    // (../) serve para voltar uma pasta e acessar 
console.log(moduloA.ola)                   //aqueles arquivos daquela pasta pai

const c = require('./pastaC/index')
//const c = require('./pastaC')  -> Mesma coisa do de cima, por padrão, ele procura o arquivo index.js
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!!')
    res.end
}).listen(8080)