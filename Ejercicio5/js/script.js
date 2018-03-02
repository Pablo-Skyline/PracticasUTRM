function addCampo(){
	var div = document.createElement("div");

	var file = document.createElement("input");
	file.setAttribute("type","file");

	var link = document.createElement("input");
	link.setAttribute("type","submit");
	link.setAttribute("value","Eliminar");
	link.setAttribute("onclick","eliminarCampo(this);")

	div.appendChild(file);
	div.appendChild(link);

	document.getElementById("archivo").appendChild(div);
}

function eliminarCampo(obj){
	var eliminar = obj.parentNode;
	eliminar.parentNode.removeChild(eliminar);
}