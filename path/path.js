const path = require('path')
console.log('basename', path.basename('~//.dev//node//arquivo.html'))
console.log('normalize',path.normalize('~//.dev//node//arquivo.html'))
console.log('join path', path.join('/teste', '/teste2', 'teste3/teste4','dir2','../..'))
console.log('resolve', path.resolve('path.js'))
console.log('Extension', path.extname('path.js'))