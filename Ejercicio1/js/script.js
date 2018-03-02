function obtenerPosicion(e){
	x= e.clientX;
	y= e.clientY;
	console.log(parseInt(x,10));
	color1=parseInt(x,10).toString(16,4).toUpperCase();
	color2=parseInt(y,10).toString(16,4).toUpperCase();

	if (color1.length==2 && color2.length==2) {
		
	}else if (color1.length==1 && color2.length==1){
		color1="0"+color1;
		color2="0"+color2;
	}else if (color1.length==1 && color2.length==2){
		color1="0"+color1;
	}else if (color1.length==2 && color2.length==1){
		color2="0"+color2;
	}else{
		
	}

	cursor= "El cursor del mouse esta: "+color1+" - "+color2+" y provoca el color: #"+color1+color2+"FF";
	document.getElementById("displayArea").innerHTML=cursor;
	var div = document.getElementById("cuadrado");

	div.style.background="#"+color1+color2+"FF";
}

function detener(){
	document.getElementById("displayArea").innerHTML="";
}

