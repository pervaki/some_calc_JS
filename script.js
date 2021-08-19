let objPole = document.getElementById("pole");
let objPlus = document.getElementById("b1");
let objMinus = document.getElementById("b2");
let objDil = document.getElementById("b3");
let objMnoj = document.getElementById("b4");
let objClear = document.getElementById("cb");
let objDorivn = document.getElementById("b5");
let objBackspace = document.getElementById("backspace");

let objTep = document.getElementById("tep");
let objPop = document.getElementById("pop");
let objDiya = document.getElementById("diya");

let f="*";
let k=0;
let res=1;

let n0Obj = document.getElementById("n0");
let n1Obj = document.getElementById("n1");
let n2Obj = document.getElementById("n2");
let n3Obj = document.getElementById("n3");
let n4Obj = document.getElementById("n4");
let n5Obj = document.getElementById("n5");
let n6Obj = document.getElementById("n6");
let n7Obj = document.getElementById("n7");
let n8Obj = document.getElementById("n8");
let n9Obj = document.getElementById("n9");

let historyBlockObj = document.getElementById("historyBlock");

	/**
	 * a
	 */
	function calc(a,b,act){
 	let r;
 	if(act=="+")r=a+b;else
 	if(act=="-")r=a-b;else
 	if(act=="*")r=a*b;else
 	if(act=="/" && b!=0)r=a/b;else r="error";
 	return r;
}

objBackspace.onclick = function (){
	let t = objPole.value;
	if(t.length==1)objPole.value = null; else
	if(t.length!=0)objPole.value = parseFloat(t.substring(0,t.length-1));
	k++;
	if(k>=2){

	}
	/*let str = "abcd";
	console.log(str.substring(str.length,str.length-1));*/
}

objPlus.onclick = function(){
	let t = parseFloat(objPole.value);
	res=calc(res,t ,f);
	f="+";
	objPole.value = null;
	console.log(res);
	outResLeftPanel(t,f,res);
}

objMinus.onclick = function(){
	let t = parseFloat(objPole.value);
	res=calc(res,t,f);
	f="-";
	objPole.value = null;
	console.log(res);
	outResLeftPanel(t,f,res);
}


objMnoj.onclick = function(){
	let t = parseFloat(objPole.value);
	res=calc(res,t,f);
	f="*";
	objPole.value = null;
	console.log(res);
	outResLeftPanel(t,f,res);
}


objDil.onclick = function(){
	let t = parseFloat(objPole.value);
	res=calc(res,t,f);
	f="/";
	objPole.value = null;
	console.log(res);
	outResLeftPanel(t,f,res);
}

objClear.onclick = function(){
	objPole.value = null;
	f = "*";
	res = 1;
	objTep.value = null;
	objPop.value = null;
	objDiya.value = null;
	document.getElementById('pole').setAttribute('placeholder',' ');
}

objDorivn.onclick = function(){
	let t = parseFloat(objPole.value);
	let v = calc(res,t,f);
	if(objPole.value == "error"){ objPole.value = v;}else objPole.value = v;
	objTep.value = null;
	objPop.value = null;
	objDiya.value = null;

}

function outResLeftPanel(cur,act,res){
	objTep.value = "Teper. "+cur;
	objPop.value = "Rezult. "+res;
	objDiya.value = "Znak "+act;
	document.getElementById('pole').setAttribute('placeholder',res);
	document.getElementById('pole').focus();
}

let btns_num = document.getElementsByClassName('btn-numb');

 for(let i=0;i<btns_num.length;i++){
 	btns_num[i].onclick = function (e){
 		objPole.value+=this.value;
 	}
 }
