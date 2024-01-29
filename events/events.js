const {EventEmitter} = require('events')

class Evento extends EventEmitter{}
const meuEvento = new Evento()

//subscriber - assinante
meuEvento.on('segurança',(x,y)=>{
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})

//emissor - publisher
meuEvento.emit('segurança', 'UserAdmin', 'Alterou salário')

meuEvento.on('encerrar',(dados)=>{
    console.log('\nAssinante: ' + dados)
})

meuEvento.emit('encerrar','Encerrando a execução da importação dos dados')