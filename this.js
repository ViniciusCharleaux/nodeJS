console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)


function logThis(){     //this dentro de uma funcao aponta para global
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()