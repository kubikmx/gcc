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
				if (field.liga!=""){
					$(".parrafodetalle").append('<a onclick="openurl(\''+field.liga+'\')" class="linkexterno">'+field.tituloliga+'</a>');
				}
	        });
	    });
	}


}

function onLoad_torneo(){
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

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_torneo.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				$("#titulo_detalle").html(field.nombre);
				$(".fotonoticia").attr("src","http://k-i.co/cc/images/torneos/"+field.imagen);	
				$(".parrafodetalle").html(field.detalle);
				if (field.liga!=""){
					$(".parrafodetalle").append('<a onclick="openurl(\''+field.liga+'\')" class="linkexterno">'+field.tituloliga+'</a>');
				}
				if (field.imagen_detalle!=""){
					$("#imagen_torneo").attr("src","http://k-i.co/cc/images/torneos/"+field.imagen_detalle);	
					$("#imagen_torneo").show();
				}
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

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_eventos.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				$("#titulo_detalle").html(field.nombre);
				$(".fotonoticia").attr("src","http://k-i.co/cc/images/eventos/"+field.imagen);	
				$(".parrafodetalle").html(field.detalle);
				if (field.liga!=""){
					$(".parrafodetalle").append('<a onclick="openurl(\''+field.liga+'\')" class="linkexterno">'+field.tituloliga+'</a>');
				}
	        });
	    });
	}


}

function loadactivity(){
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

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_actividad.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				$("#titulo_detalle").html(field.nombre);
				$(".fotonoticia").attr("src","http://k-i.co/cc/images/actividades/"+field.imagen);	
				$(".parrafodetalle").html(field.detalle);
				$(".icontitle").html(field.categoria);
				$("#imagenheader").attr("src","http://www.k-i.co/cc/images/categorias/thumbs/"+field.imagencat);
				if (field.liga!=""){
					$(".parrafodetalle").append('<a onclick="openurl(\''+field.liga+'\')" class="linkexterno">'+field.tituloliga+'</a>');
				}
	        });

	    });
	}


}



function comparte(){
	var mensaje=$(".parrafodetalle").html();
	var titulo=$("#titulo_detalle").html();
	var imagen=$(".fotonoticia").attr("src");
	var subject=$("#titulo_detalle").html();
	var url="http://k-i.co/cc/share.php";
	window.plugins.socialsharing.share(mensaje+', '+titulo+', '+imagen, titulo, imagen, null);
}


function loadrestaurant(){
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

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_restaurant.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				$("#namerestaurant").html(field.nombre);
				$("#imagerestaurant").attr("src","http://k-i.co/cc/images/restaurantes/"+field.imagen);	
				$(".detallerestaurante").html(field.detalle);
				if (field.menu!=""){ 
					$("#aconsultamenu").attr("href","menurestaurant.html?idv="+field.id_restaurante);
					$("#aconsultamenu").show();
				} else 
					$("#aconsultamenu").hide();
				$("#ligaopinion").attr("href","opiniones.html?idv="+field.nombre);	
	        });
	    });
	}


}

function cargaidrestaurante(){
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
		$("#restaurantes").val(idv);
	}

	$.ajax({
            url:   'http://www.k-i.co/cc/webservices/cuestionario.php',
            success:  function (response) {
                    $("#contentq").html(response);
            }
	});

}

function cargaimagenmenu(){
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

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_restaurant.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				$("#imagenzoom").attr("src","http://k-i.co/cc/images/restaurantes/"+field.menu);	
				zoomactive();
	        });
	    });
	}

	
}

function zoomactive(){
    

}

function loadhadicap(){

        $.ajax({
          type: "POST",
          url: "http://www.k-i.co/cc/webservices/handicap.php",
          data: ({date: "last"}),
          cache: false,
          dataType: "text",
          success: onSuccesshandicap
        });
        
}
function onSuccesshandicap(data)
{
    $("#detallehandicap").html( data);
}

function openurl(link){
	var ref = window.open(encodeURI(link), "_blank");
}

function enviaropinion(){
	var invalido=false;
	$("input:radio").each(function(){
		var name = $(this).attr("name");

		if ($('input[name="'+name+'"]').is(':checked')) {
	    }
	    else { 
	        invalido=true;
	    }
		

	});
	if (invalido){
		alert("Faltan campos por seleccionar");
	} else {
		$("#formopinion").hide();
	    $("#messagesprocess").html("Procesando, espere por favor...");
	    $.ajax({
	      type: "POST",
	      url: "http://www.k-i.co/cc/webservices/opiniones.php",
	      data: $("#formopinion").serialize(),
	      success: function( data ) {
	        $("#messagesprocess").html(data.respuesta);
	      },
	      dataType: "json"
	    });
	}
    
}