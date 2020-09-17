const {sum} = require('./js/qq.js')
//webpack .\src\main.js .\dist\bundle.js
console.log(sum(2,1))


import {name,age} from './js/info.js'
console.log(name)

//引入css文件
require('./css/normal.css')

//依赖less文件
require('./css/special.less')
document.writeln('asdasd')
