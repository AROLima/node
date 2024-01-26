const EventEmitter = require('events')

class Evento extends EventEmitter{}
const meuEvento = new Evento()

meuEvento.on('segurança',(x,y)=>{
    console.log(`Executando o evento 'segurança': ${x} ${y}`)
})

meuEvento.emit('segurança', 'UserAdmin', 'Alterou salário')