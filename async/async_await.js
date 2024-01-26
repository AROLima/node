async function main(){
    try {
        const resultado =  await sum('#')
        console.log(`Resultado com Async/Await: ${resultado}`)

    } catch(error) {
        console.log(`Funcionou não: ${error}`)
        console.log(process.env.USERNAME)

    }
    
}

function sum(x){
    return new Promise ((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != "number"){
            reject("Não é um numero")
        }
        setTimeout(()=>{
            resolve(x + 500);
        }, 3000);
    })
}

main()