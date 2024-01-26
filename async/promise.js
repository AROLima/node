function soma(x){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(x + 500);
        }, 3000);
    })
}

soma(200).then((resultado)=>{
    console.log(`Resolvido. Resultado: ${resultado}`)
}).catch(()=>{
    console.log("Erro")
}) 