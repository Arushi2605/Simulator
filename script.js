*{
	padding: 0;
	margin: 0;
}

.head, .heading{
	background-image: linear-gradient(#599bdc, #3072b3);
	color: #fff;
	text-align: center;
}
.head{
	padding: 15px 0px;
	font-size: 24px;
}
.heading{
	padding: 8px 0px;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 0.5px;
}

.nab{
	width: 20%;
	margin-top: 1%;
	text-align: center;
	visibility: hidden;
	padding-top: 8%;
	font-size: 19px;
}
.nab > h2{
	margin-bottom: 2%;
}
#sa{
	margin-top: 10%;
}
#sa,#sb{
	display: none;
	text-align: center;
}
#shw-n{
	visibility: hidden;
	border: 1px solid #000;
	padding: 5px 10px;
}
#code{
	font-weight: 500;
}
.formula{
	margin: 1% 7%;
}
.for-cont{
	font-size: 25px;
	letter-spacing: 0.5px;
	background-color: #9E0815;
	border-radius: 10px;
	opacity: 0.9;
	font-weight: 600;
	color: #fff;
	padding: 10px;
	cursor: pointer;
}
.for-cont:hover{
	opacity: 1;
}
.form{
	display: none;
	border: 1px solid black;
	margin: 0% 25%;
	padding: 15px 0px;
	text-align: center;
	margin-top: 1%;
	font-weight: 600;
	font-size: 30px;
}
.container{
	display: flex;
	margin: 0% 2% 0% 2%;
}
.div1{
	width: 35%;
	border:1px solid grey;
	box-shadow: 0px 5px 5px rgba(0,0,0,0.2);
	border-radius: 5px;
	margin: 1% 1% 0% 5%;
	text-align: center;
}
.div2{
	width: 35%;
	border:1px solid grey;
	box-shadow: 0px 5px 5px rgba(0,0,0,0.2);
	border-radius: 5px;
	margin: 1% 4% 0% 1%;
}

.ot{
	border:1px solid grey;
	box-shadow: 0px 5px 5px rgba(0,0,0,0.2);
	border-radius: 5px;
	margin: 0% 6% 0% 7%;
	min-height: 30vh;
}
h4{
	text-align: center;
	margin: 4% 0%;
	font-size: 18px;
	letter-spacing: 0.2px;
}
#number{
	width: 60%;
	padding: 10px 15px;
	outline: none;
	border: 1px solid rgb(200,200,200);
	border-radius: 10px;
	margin-bottom: 3%;
}
#start , #next , #reset{
	font-weight: 500;
	color:#fff;
	width: 50%;
	padding: 8px 10px;
	margin: 1% 2%;
	background: none;
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 5px;
	font-size: 14px;
	letter-spacing: 0.3px;
	transition: all 0.2s;
}
#inputField{
	display:none;
}
#start{
	background-color: #0D85C9;
}
#start:hover{
	background-color: #0970AB;
}
#next{
	background-color: #d6d6d6;
}
.active:hover{
	background-color: #0C833E;
}
#reset{
	background-color: #B03A2E ;
}
#reset:hover{
	background-color: #96180C;
}
#result , #res{
	margin: 4% 10%;
}
#res{
	padding: 0px 2px;
	font-weight: 600;
}
.exe-cont{
	display: flex;
}
.visual{
	border-left: 1px solid rgb(0,0,0);
	width: 40%;
	margin-left: 2%;
	display: flex;
}
#outerStack{
	border: 1px solid #000;
	border-bottom: none;
	width: 40%;
	margin: 5%;
	transform: rotateX(180deg);
}
#innerStack{
	border: 1px solid #000;
	border-bottom: none;
	width: 40%;
	margin: 5%;
	transform: rotateX(180deg);
}
.fibo{	
	transform: rotateX(180deg);	
	border-bottom: 1px solid black;
	text-align: center;
    padding: 3px 0px;
}
.stack{
	transform: rotateX(180deg);
	border-bottom: 1px solid black;
	text-align: center;
    padding: 3px 0px;
}
#code{
	visibility: hidden;
	margin: 4% 5%;
	width: 55%;
}
#code div{
	padding: 1px 0px;
	font-weight: 500;
}
#two , #three , #four , #six , #seven , #eight, #eleven{
	margin-left: 5%;
}
#ten , #nine{
	margin-left: 10%;
}
.else{
	margin-left: 15%;
}
.cont{
	display: flex;
}
.some{
	position: relative;
	min-height: 30vh;
	border: 1px solid red;
}
.a , .b{
	height: 50px;
	width: 30%;
	position: relative;
	text-align: center;
	margin-left: 35%;
	border: 2px solid rgba(98 , 174 , 238 , 0.7);
	background-color: rgba(98 , 174 , 238 , 0.2);
}
.a{
	animation: down 1s;
	animation-fill-mode: forwards;
}
.b{
	margin-top: 15%;
	animation: up 1s;
	animation-fill-mode: forwards;
}
.c{
	position:absolute;
	top: 0;
	left: 0;
	margin-left:35%;
	margin-top: 60px;
	border: 2px solid rgba(98 , 174 , 238 , 0.7);
	width: 30%;
	height: 40px;
	visibility: hidden;
	text-align: center;
	padding-top: 15px;
	background-color: rgba(98 , 174 , 238 , 0.2);
	font-weight: 500;
}
#res{
	display: none;
}
.fib{
	text-align: center;
	font-size: 18px;
	border-bottom:1px solid red;
}
@keyframes downnine {
	from{
		top: 0px;
	}
	to{
		top:38px;
		visibility: hidden;
	}
}
@keyframes upnine {
	from{
		bottom: 0px;
	}
	to{
		bottom:38px;
		visibility: hidden;
	}
}
@keyframes down {
	from{
		top: 0px;
	}
	to{
		top:46px;
		visibility: hidden;
	}
}
@keyframes up {
	from{
		bottom: 0px;
	}
	to{
		bottom:46px;
		visibility: hidden;
	}
}
@keyframes downfif {
	from{
		top: 0px;
	}
	to{
		top:33px;
		visibility: hidden;
	}
}
@keyframes upfif {
	from{
		bottom: 0px;
	}
	to{
		bottom:33px;
		visibility: hidden;
	}
}
