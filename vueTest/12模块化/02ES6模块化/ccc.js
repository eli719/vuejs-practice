import {
	flag,
	sum
} from './aaa.js'
if (flag) {
	console.log('cccc')
	console.log(sum(40, 50))
}

import{
	num1,height
} from './aaa.js'

console.log(num1)

//3.导出方法/类
import{mul,Person
} from './aaa.js'
console.log(mul(100,200))

const p = new Person();
p.run()

//4.导入export default
import add from'./aaa.js'
// console.log(add)
add(1)

//5.统一全部导出
import * as aaa from'./aaa.js'
console.log(aaa.flag)