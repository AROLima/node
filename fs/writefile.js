const {writeFile} = require('fs')

writeFile('arquivo.txt', 'Criando arquivo de texto com writefile', err=>{
    if(err) throw err
    console.log('Arquivo Criado com sucesso!')
})