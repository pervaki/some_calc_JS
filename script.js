let objPole = document.getElementById("pole");
let objPlus = document.getElementById("b1");
let objMinus = document.getElementById("b2");
let objDil = document.getElementById("b3");
let objMnoj = document.getElementById("b4");
let objClear = document.getElementById("cb");
let objDorivn = document.getElementById("b5");

let objTep = document.getElementById("tep");
let objPop = document.getElementById("pop");
let objDiya = document.getElementById("diya");

let f="*";
let res=1;

function calc(a,b,act){
 	let r;
 	if(act=="+")r=a+b;else
 	if(act=="-")r=a-b;else
 	if(act=="*")r=a*b;else
 	if(act=="/" && b!=0)r=a/b;else r="error";
 	return r;
}

objPlus.onclick = function(){
	let t = parseFloat(objPole.value);
	calc(res,t,f);
	res=calc(res,t,f);
	f="+";
	objPole.value = null;
	console.log(res);
	objTep.value = "Teper. "+t;
	objPop.value = "Rezult. "+res;
	objDiya.value = "Znak "+f;
}

objMinus.onclick = function(){
	let t = parseFloat(objPole.value);
	calc(res,t,f);
	res=calc(res,t,f);
	f="-";
	objPole.value = null;
	console.log(res);
	objTep.value = "Teper. "+t;
	objPop.value = "Rezult. "+res;
	objDiya.value = "Znak "+f;
}


objMnoj.onclick = function(){
	let t = parseFloat(objPole.value);
	calc(res,t,f);
	res=calc(res,t,f);
	f="*";
	objPole.value = null;
	console.log(res);
	objTep.value = "Teper. "+t;
	objPop.value = "Rezult. "+res;
	objDiya.value = "Znak "+f;
}


objDil.onclick = function(){
	let t = parseFloat(objPole.value);
	calc(res,t,f);
	res=calc(res,t,f);
	f="/";
	objPole.value = null;
	console.log(res);
	objTep.value = "Teper. "+t;
	objPop.value = "Rezult. "+res;
	objDiya.value = "Znak "+f;
}

objClear.onclick = function(){
	objPole.value = null;
	f = "*";
	res = 1;
	objTep.value = null;
	objPop.value = null;
	objDiya.value = null;
}

objDorivn.onclick = function(){
	let t = parseFloat(objPole.value);
	let v = calc(res,t,f);
	if(objPole.value == "error"){ objPole.value = v;}else objPole.value = v;
}
