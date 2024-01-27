console.log('Exibindo uma mensagem no console')

//error

//console.error(new Error('Exibindo mensagem de erro'))

const drags = [
'Katya',
'Trixxie',
'Pythia',
'Heide', 
'Dahli',
'Adore',
'Jimbo',
]

console.table(drags)

const dados = {
    name: 'Cleiton Clésio',
    empresa: 'Cleitônia'
}

console.table(dados)

console.count('Processo')
console.count('Processo')
console.count('Processo') 


console.log('Resetando o processo')
console.countReset('Processo')

console.count('Processo')
console.count('Processo')
console.count('Processo')

console.time('contador')

for (let index = 0; index <= 10; index ++) {
    console.log(index)
    
}

console.timeEnd('contador')



