var moduleA = (function(){
	
	var obj ={}
	
	var name='aaa'
	var age = 18;
	function sum(num1,num2){
		return num1+num2;
	}
	
	var flag= true;
	
	if(flag){
		console.log(sum(10,20));
	}
	obj.flag = flag;
	obj.sum=sum;
	return obj;
})()