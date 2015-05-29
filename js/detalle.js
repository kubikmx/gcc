function onLoad(){

	loadinfo();
}

function loadinfo(){

	for (i=0; i<arrVariables.length; i++) {
	  arrVariableActual = arrVariables[i].split("=");
	  if (isNaN(parseFloat(arrVariableActual[1])))
	    eval(arrVariableActual[0]+"='"+unescape(arrVariableActual[1])+"';");
	  else
	    eval(arrVariableActual[0]+"="+arrVariableActual[1]+";");
	}

/*
	$.getJSON("http://www.k-i.co/cc/webservices/noticias.php", function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="bordelist"><div class="articulo"><img src="http://k-i.co/cc/images/noticias/thumbs/'+field.imagen+'" >';
         	 bloque+= '<p><span>'+ field.nombre +' </span>'+field.intro+'</p>';
			 bloque+= '<a href="detalle.html" data-id="'+field.id_noticia+'"></a>';
			 bloque+= '</div><div class="clear"></div></div>';	

		$("#listado_normal").append(bloque);	 

        });
    });
*/

}