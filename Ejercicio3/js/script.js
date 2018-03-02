function soloTextos(e){
	var key= window.Event ? e.which: e.keyCode;
	var texto= document.getElementById("txt");
	texto.innerHTML="Key: "+event.which;
	return ((key>=97 && key<=122) || (key>=65 && key<=90) || (key==32))
}

function soloNumeros(e){
	var key= window.Event ? e.which: e.keyCode;
	var texto= document.getElementById("txt");
	texto.innerHTML="Key: "+event.which;
	return ((key>=48 && key<=57)||(key>=40 && key<=41)||(key==32)||(key==43))
}

function soloFecha(e){
	var key= window.Event ? e.which: e.keyCode;
	var texto= document.getElementById("txt");
	texto.innerHTML="Key: "+event.which;
	return ((key>=48 && key<=57)||(key==47))
}

function soloUnaDecimal(e){
	var key= window.Event ? e.which: e.keyCode;
	var texto= document.getElementById("txt");
	texto.innerHTML="Key: "+event.which;

	var altura = document.getElementById('altura_id').value;
	console.log(altura);
	var arrayAltura = altura.split('.')

	if (altura.indexOf(".") != -1) {
		if (arrayAltura[1].length<1) {
			return (key>=48 && key<=57)
		} else {
			return (key==0)
		}
	} else {
		return (key>=48 && key<=57 || key==46)
	}
	
}

