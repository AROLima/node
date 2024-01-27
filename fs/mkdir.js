const fs = require('fs')
const assets = ['css', 'js', 'images', 'fonts', 'lib']

function make(dir){

    dir.forEach((item)=>{

        fs.mkdir(`projeto/asstes/${item}`,{recursive: true}, (err)=>{
            if(err) throw err
            console.log('Diretorio criado com sucesso', item)
        })    
    })
}

make(assets)
//o parâmetro {recursive: true} permite a criação de subpastas