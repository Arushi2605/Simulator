var width = 100;
var ret=[];
function startCode(){
	var num = Number(document.getElementById('number').value);
	document.getElementById('number').disabled = true;
	width = width/(num+1) ;
	if(Number.isNaN(num) || typeof num ==='string' || num<=0 || num>5 || !Number.isInteger(num)){
		document.querySelector('.inputSpan').style.display = 'block';
		document.getElementById('seven').style.color = 'black';
		document.getElementById('next').disabled = true;
		document.getElementById('next').style.backgroundColor ="#d6d6d6";
	}
	else{

		document.querySelector(".nab").style.visibility = "visible";
		document.getElementById('next').disabled = false;
		document.getElementById('next').style.backgroundColor ="#229954";
		document.getElementById("shw-n").style.visibility='visible';
		document.getElementById("shw-n").innerHTML = num;
		document.getElementById('seven').style.color = 'black';
		main();
	}
}
function start(){
	document.getElementById('inputField').style.display = 'block';
	document.getElementById('seven').style.color = 'red';
	document.getElementById("code").style.visibility='visible';
	document.getElementById('start').style.display = "none";
	document.getElementById('next').disabled = false;
	document.getElementById('next').style.backgroundColor ="#229954";
}
function fib(n){
	id.push('one');
	if(n == 0){
		id.push('two');
		return n;
	}
	else if(n == 1){
		id.push('three');
		return 1;
	}
	else{
		id.push('four');
		ret.push([(n-2),(n-1)]);
		return fib(n-2) + fib(n-1);
	}
}
var array=[],n,cf=0;
function main(){
	var num = Number(document.getElementById('number').value);
	var i, fibonacci;
	for(i=0; i<=num; i++){		
		id.push('eight');
		id.push('nine');
		fibonacci = fib(i);		
		array.push(fibonacci);
		id.push('ten');
	}
	id.push("eleven");
	id.push("twelve");
}
var count=0, id=[], countnine=0;
function hightlight(){
	setTimeout(function(){ 
		document.getElementById('next').style.backgroundColor='#229954'; }, 100);
	document.getElementById('next').style.backgroundColor='#0F7038';
	var num = Number(document.getElementById('number').value);
	var num = Number(document.getElementById('number').value);
	for(var i=0;i<=count;i++){
		document.getElementById(id[i]).style.color='black';
	}
	if(count<id.length){
		document.getElementById(id[count]).style.color = 'red';
		if(id[count]=='two') document.querySelector('#innerStack').innerHTML += "<div class='stack'>"+0+"<br>";		
		if(id[count]=='three') document.querySelector('#innerStack').innerHTML += "<div class='stack'>"+1+"<br>";
		if(id[count]=='four'){
			if(document.querySelector('#outerStack').innerHTML!=""){
				//removing from bottom
				if(cf>2 && cf<=5){
					console.log("if bottom "+cf);
					document.querySelector('.fibo').remove();
					document.querySelector('#outerStack').innerHTML += "<div class='fibo'>fib("+(ret[cf][0])+")<br>";
					document.querySelector('#outerStack').innerHTML += "<div class='fibo'>fib("+(ret[cf][1])+")<br>";
				}
				//removing from top
				else if(cf==8){
					console.log("if c=8bottom "+cf);
					document.querySelector('.fibo').remove();
					document.querySelector('#outerStack').innerHTML += "<div class='out'><div class='fibo'>fib("+(ret[cf][0])+")<br>";
					document.querySelector('#outerStack').innerHTML += "<div class='out'><div class='fibo'>fib("+(ret[cf][1])+")<br>";
				}
				else if(cf==9 || cf==13){
					console.log("if c=9 "+cf);
					document.querySelector('.out:last-child').remove();
					document.querySelector('#outerStack').innerHTML += "<div class='out'><div class='fibo'>fib("+(ret[cf][0])+")<br>";
					document.querySelector('#outerStack').innerHTML += "<div class='out'><div class='fibo'>fib("+(ret[cf][1])+")<br>";
				}
				else if(cf==10){
					console.log("cf>=10 else"+cf)
					document.querySelector('.fibo').remove();
					document.querySelector('#outerStack').innerHTML += "<div class='outS'><div class='fibo'>fib("+(ret[cf][0])+")<br>";
					document.querySelector('#outerStack').innerHTML += "<div class='outS'><div class='fibo'>fib("+(ret[cf][1])+")<br>";
				}
				else if(cf==11 || cf==12){
					console.log("cf>=10 else"+cf)
					document.querySelector('.outS').remove();
					document.querySelector('#outerStack').innerHTML += "<div class='out'><div class='fibo'>fib("+(ret[cf][0])+")<br>";
					document.querySelector('#outerStack').innerHTML += "<div class='out'><div class='fibo'>fib("+(ret[cf][1])+")<br>";
				}
				else{
					console.log("else lastchild top "+cf);
					document.querySelector('.fibo:last-child').remove();
					document.querySelector('#outerStack').innerHTML += "<div class='fibo'>fib("+(ret[cf][0])+")<br>";
					document.querySelector('#outerStack').innerHTML += "<div class='fibo'>fib("+(ret[cf][1])+")<br>";
				}
			}
			else{
				console.log("last else"+cf)
				document.querySelector('#outerStack').innerHTML += "<div class='fibo'>fib("+(ret[cf][0])+")<br>";
				document.querySelector('#outerStack').innerHTML += "<div class='fibo'>fib("+(ret[cf][1])+")<br>";
			}
			cf++;
		}
		if(id[count]=='eight') {
			document.querySelector('#outerStack').innerHTML = "";
			document.querySelector('#innerStack').innerHTML = "";
		}
		if(id[count]=='ten'){
			if(countnine > 1){
				var cont = document.querySelector(".cont");
				document.getElementById("next").disabled = true;
				cont.innerHTML += '<div class="some" style = "width:'+width+'%"><div class="fib">Fib('+(countnine)+')</div><div class="a"><b>fib('+(countnine - 2)+')</b></div>	<div class="b"><b>fib('+(countnine-1)+')</b></div><div class="c cee"><b>'+array[countnine]+'</b></div>	</div>';

				document.getElementById("shw-a").innerHTML = "fib("+(countnine - 1)+") = "+ array[countnine - 2];
				document.getElementById("shw-b").innerHTML = "fib("+(countnine)+") = "+ array[countnine - 1];
				if(num <= 6){
					document.querySelector(".a").style.animation = "down 1s";
					document.querySelector(".b").style.animation = "up 1s";
				}
				else{
					document.querySelector(".a").style.animation = "downnine 1s";
					document.querySelector(".b").style.animation = "upnine 1s";
				}
				setTimeout(function (){
					document.querySelector(".a").remove();
					document.querySelector(".b").remove();
					document.querySelector(".cee").style.visibility = "visible";
					document.querySelector(".cee").classList.remove("cee");
					document.getElementById("next").disabled = false;
				},1000);
			}
			else{
				var cont = document.querySelector(".cont");
				document.getElementById("next").disabled = true;
				if(countnine==0){
					document.getElementById("sa").style.display='block';
					document.getElementById("shw-a").innerHTML = "fib("+(countnine) +") = "+ array[countnine];
				}
				else{
					document.getElementById("sb").style.display='block';
					document.getElementById("shw-b").innerHTML = "fib("+(countnine)+") = "+ array[countnine];
				}
				cont.innerHTML += '<div class="some" style = "width:'+width+'%"><div class="fib">Fib('+(countnine)+')</div>  <div class="c cee"><b>'+array[countnine]+'</b></div>	</div>';
				setTimeout(function (){
					document.getElementById("next").disabled = false;
					document.querySelector(".cee").style.visibility = "visible";
					document.querySelector(".cee").classList.remove("cee");
				},500);
			}
			document.getElementById('res').innerHTML += array[countnine++];
		}
		count++;
	}
	if(id[count]=="twelve"){
		document.getElementById('next').disabled = true;
		document.getElementById('next').style.backgroundColor = "#d6d6d6";
		alert('End of function');
		var code = document.getElementById('code');
		var div = code.getElementsByTagName('div');
		for(var i=0;i<div.length;i++){
			div[i].style.color='black';
		}
	}
}
function formula (){
	var formulaCont = document.getElementById("form");
	if(formulaCont.style.display === "block"){
		formulaCont.style.display = "none";
	}
	else {
		formulaCont.style.display = "block";
	}
}
