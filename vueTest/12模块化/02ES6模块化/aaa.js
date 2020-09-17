var name = 'aaa'
var age = 18;

function sum(num1, num2) {
	return num1 + num2;
}

var flag = true;

if (flag) {
	console.log(sum(10, 20));
}

//1.导出方式一
export {flag,sum}

//2.导出方式二
export var num1 = 1000;
export var height =1.82;

//3.导出函数/类
export function mul(num1,num2){
	return num1+num2;
}

export class Person{
	run(){
		console.log("person")
	}
}

// const address = 'bj'
// export default address;

export default function(s){
	console.log(s)
}