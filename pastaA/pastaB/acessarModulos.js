const moduloA = require('../../moduloA')    // (../) serve para voltar uma pasta e acessar 
console.log(moduloA.ola)                   //aqueles arquivos daquela pasta pai

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!!')
    res.end
}).listen(8080)