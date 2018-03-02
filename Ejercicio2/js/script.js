var colorR="FF";
var colorG="FF";
var colorB="FF";

function obtenerPosicion1(e){
	x= e.clientX-255;
	y= e.clientY-276;

	color1=parseInt(x,10).toString(16).toUpperCase();
	color2=parseInt(y,10).toString(16).toUpperCase();

	if (color1.length==1 && color2.length==1){
		color1="0"+color1;
		color2="0"+color2;
	}else if (color1.length==1 && color2.length==2){
		color1="0"+color1;
	}else if (color1.length==2 && color2.length==1){
		color2="0"+color2;
	}else{
		
	}

	cursor= "COLOR R: #FF"+color1+color2;
	document.getElementById("displayAreaR").innerHTML=cursor;

	var div2 = document.getElementById("displayR");
	div2.style.background="#FF"+color1+color2;

	var colorR1;
	var colorG1;
	var colorB1;
	
	//Combina el color R
	colorR1="FF";
	colorR1=parseInt(colorR1,16);
	this.colorR=parseInt(this.colorR,16);
	colorR1=Math.round((colorR1+this.colorR)/2);
	colorR1=parseInt(colorR1,10).toString(16).toUpperCase();

	if (colorR1.length==1){
		colorR1="0"+colorR1;
	}

	//Combina el color G
	color1=parseInt(color1,16);
	colorG1=parseInt(this.colorG,16);
	colorG1=Math.round((colorG1+color1)/2);
	colorG1=parseInt(colorG1,10).toString(16).toUpperCase();

	if (colorG1.length==1){
		colorG1="0"+colorG1;
	}

	//Combina el color B
	color2="00";
	color2=parseInt(color2,16);
	colorB1=parseInt(this.colorB,16);
	colorB1=Math.round((colorB1+color2)/2);
	colorB1=parseInt(colorB1,10).toString(16).toUpperCase();

	if (colorB1.length==1){
		colorB1="0"+colorB1;
	}

	this.colorR=colorR1;
	this.colorG=colorG1;
	//this.colorB=colorB1;

	combinarColor();
}

function obtenerPosicion2(e){
	x= e.clientX-255;
	y= e.clientY-316;

	color1=parseInt(x,10).toString(16).toUpperCase();
	color2=parseInt(y,10).toString(16).toUpperCase();

	if (color1.length==1 && color2.length==1){
		color1="0"+color1;
		color2="0"+color2;
	}else if (color1.length==1 && color2.length==2){
		color1="0"+color1;
	}else if (color1.length==2 && color2.length==1){
		color2="0"+color2;
	}else{
		
	}

	cursor= "COLOR G: #"+color2+"FF"+color1;
	document.getElementById("displayAreaG").innerHTML=cursor;

	var div2 = document.getElementById("displayG");
	div2.style.background="#"+color2+"FF"+color1;

	var colorG2;
	var colorB2;
	var colorR2;

	//Combina el color G
	colorG2="FF";
	colorG2=parseInt(colorG2,16);
	this.colorG=parseInt(this.colorG,16);
	colorG2=Math.round((colorG2+this.colorG)/2);
	colorG2=parseInt(colorG2,10).toString(16).toUpperCase();

	if (colorG2.length==1){
		colorG2="0"+colorG2;
	}

	//combina el color B
	color1=parseInt(color1,16);
	colorB2=parseInt(this.colorB,16);
	colorB2=Math.round((colorB2+color1)/2);
	colorB2=parseInt(colorB2,10).toString(16).toUpperCase();

	if (colorB2.length==1){
		colorB2="0"+colorB2;
	}

	//combina el color R
	color2="00";
	color2=parseInt(color2,16);
	colorR2=parseInt(this.colorR,16);
	colorR2=Math.round((colorR2+color2)/2);
	colorR2=parseInt(colorR2,10).toString(16).toUpperCase();

	if (colorR2.length==1){
		colorR2="0"+colorR2;
	}

	this.colorG=colorG2;
	this.colorB=colorB2;
	//this.colorR=colorR2;

	combinarColor();
}

function obtenerPosicion3(e){
	x= e.clientX-255;
	y= e.clientY-356;

	color1=parseInt(x,10).toString(16).toUpperCase();
	color2=parseInt(y,10).toString(16).toUpperCase();

	if (color1.length==1 && color2.length==1){
		color1="0"+color1;
		color2="0"+color2;
	}else if (color1.length==1 && color2.length==2){
		color1="0"+color1;
	}else if (color1.length==2 && color2.length==1){
		color2="0"+color2;
	}else{
		
	}

	cursor= "COLOR B: #"+color1+color2+"FF";
	document.getElementById("displayAreaB").innerHTML=cursor;

	var div2 = document.getElementById("displayB");
	div2.style.background="#"+color1+color2+"FF";

	var colorB3;
	var colorR3;
	var colorG3;

	//Combina el color B
	colorB3="FF";
	colorB3=parseInt(colorB3,16);
	this.colorB=parseInt(this.colorB,16);
	colorB3=Math.round((colorB3+this.colorB)/2);
	colorB3=parseInt(colorB3,10).toString(16).toUpperCase();

	if (colorB3.length==1){
		colorB3="0"+colorB3;
	}

	//combina el color R
	color1=parseInt(color1,16);
	colorR3=parseInt(this.colorR,16);
	colorR3=Math.round((colorR3+color1)/2);
	colorR3=parseInt(colorR3,10).toString(16).toUpperCase();

	if (colorR3.length==1){
		colorR3="0"+colorR3;
	}

	//Combina el color G
	color2="00";
	color2=parseInt(color2,16);
	colorG3=parseInt(this.colorG,16);
	colorG3=Math.round((colorG3+color2)/2);
	colorG3=parseInt(colorG3,10).toString(16).toUpperCase();

	if (colorG3.length==1){
		colorG3="0"+colorG3;
	}

	this.colorB=colorB3;
	this.colorR=colorR3;
	//this.colorG=colorG3;

	combinarColor();	
}

function combinarColor(){
	var div1 = document.getElementById("cuadrado");
	div1.style.background="#"+this.colorR+this.colorG+this.colorB;

	cursor= "El cursor del mouse provoca el color: #"+this.colorR+this.colorG+this.colorB;
	document.getElementById("displayArea").innerHTML=cursor;
}