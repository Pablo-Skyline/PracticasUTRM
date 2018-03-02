function addKiwi(){
	var li = document.createElement("li");

	var imagen = document.createElement("img");
	imagen.setAttribute("src","img/kiwi.jpg");

	var link = document.createElement("img");
	link.setAttribute("src","img/eliminar.png");
	link.setAttribute("style","width:40px;height:40px;");
	link.setAttribute("onclick","eliminarCampo(this);")

	li.appendChild(imagen);
	li.appendChild(link);

	document.getElementById("lista").appendChild(li);
}

function addFresa(){
	var li = document.createElement("li");

	var imagen = document.createElement("img");
	imagen.setAttribute("src","img/fresa.jpg");

	var link = document.createElement("img");
	link.setAttribute("src","img/eliminar.png");
	link.setAttribute("style","width:40px;height:40px;");
	link.setAttribute("onclick","eliminarCampo(this);")

	li.appendChild(imagen);
	li.appendChild(link);

	document.getElementById("lista").appendChild(li);
}

function addAguacate(){
	var li = document.createElement("li");

	var imagen = document.createElement("img");
	imagen.setAttribute("src","img/aguacate.jpg");

	var link = document.createElement("img");
	link.setAttribute("src","img/eliminar.png");
	link.setAttribute("style","width:40px;height:40px;");
	link.setAttribute("onclick","eliminarCampo(this);")

	li.appendChild(imagen);
	li.appendChild(link);

	document.getElementById("lista").appendChild(li);
}

function eliminarCampo(obj){
	var eliminar = obj.parentNode;
	eliminar.parentNode.removeChild(eliminar);
}