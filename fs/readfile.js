const fs = require('fs')
//não bloqueante (Asíncrona)
fs.readFile('texto.txt', (err, data)=>{
    if(err) throw err

    console.log(data.toString())

})

//bloqueante (Síncrona)
const texto = fs.readFileSync("texto.txt")

console.log(`Text: ${texto}`)