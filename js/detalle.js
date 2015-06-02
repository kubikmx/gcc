function onLoad(){

	loadinfo();
}

function loadinfo(){
	var cadVariables = location.search.substring(1,location.search.length ); // sin ?
	var arrVariables = cadVariables.split("&"); // array de cadenas de tipo "var1=valor1"
	var idv=0;

	for (i=0; i<arrVariables.length; i++) {
	  arrVariableActual = arrVariables[i].split("=");
	  if (isNaN(parseFloat(arrVariableActual[1])))
	    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
	  else
	    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
	}
	
	if (idv!=0){

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_noticias.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				$("#titulo_detalle").html(field.nombre);
				$(".fotonoticia").attr("src","http://k-i.co/cc/images/noticias/"+field.imagen);	
				$(".parrafodetalle").html(field.detalle);
	        });
	    });
	}


}

function loadaviso(){
	var cadVariables = location.search.substring(1,location.search.length ); // sin ?
	var arrVariables = cadVariables.split("&"); // array de cadenas de tipo "var1=valor1"
	var idv=0;

	for (i=0; i<arrVariables.length; i++) {
	  arrVariableActual = arrVariables[i].split("=");
	  if (isNaN(parseFloat(arrVariableActual[1])))
	    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
	  else
	    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
	}
	
	if (idv!=0){

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_aviso.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				$("#titulo_detalle").html(field.nombre);
				$(".fotonoticia").attr("src","http://k-i.co/cc/images/avisos/"+field.imagen);	
				$(".parrafodetalle").html(field.detalle);
	        });
	    });
	}


}