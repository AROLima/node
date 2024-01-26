console.log(`Nome do Arquivo: `, __filename)
console.log(`Diretório do arquivo: `, __dirname)
console.log(`Sitema Operacional: `, process.env.OS)
console.log(`Usuário no SO: `, process.env.USERNAME)
console.log(`Idioma: `, process.env.LANG)
console.log(`Nome do Server: `, process.env.COMPUTERNAME)
console.log('Diretório em que foi invocado: ', process.cwd())

console.log(process.argv[2])

switch(process.argv[2]){
    case '-a':
        console.log('Execute rotina principal')
        break
    case '-i':
        console.log('Execute Instalação')
        break
    case '-q':
        console.log('Encerrando Aplicação')
        process.exit(); //intemrrompe imediatamente o código
    default:
        console.log('Parametro inválido.')
        break
}
console.log(`Ambiente do servidor: `, process.platform)

