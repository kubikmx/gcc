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

	        var value = localStorage.getItem('kubik_noticias') || '';
			var actual=value;
			var res = value.split(","),
			i=0; 
			var nuevo="";
			for(i in res){ 
					if (res[i]!=idv && res[i]!="")
						nuevo+=","+res[i];
			} 
<<<<<<< HEAD
			localStorage.setItem("kubik_noticias", nuevo); $(".parrafodetalle").append('<div class="oculto">'+nuevo+'</div>');
=======
			localStorage.setItem("kubik_noticias", nuevo); alert(nuevo);
>>>>>>> parent of ddbe0b7... estilos

	        /*window.applicationPreferences.get("kubik_noticias", function(value) {
	              var actual=value;
	              var res = value.split(","),
	              i=0; 
	              var nuevo="";
	              for(i in res){ 
	              		if (res[i]!=idv && res[i]!="")
	              			nuevo+=","+res[i];
	              } 
	              window.applicationPreferences.set("kubik_noticias", nuevo, function() {},function(error) {});
	            
	        }, function(error) {});*/

	    });
	}


}

function onLoadcontact(){
	var idv=10;
	
	if (idv!=0){

		$.getJSON("http://www.k-i.co/cc/webservices/detalle_noticias.php?id="+idv, function(result){
	        $.each(result, function(i, field){
				if (field.liga!=""){
					$(".parrafodetalle").append('<a onclick="openurl(\'http://www.gcc.com.mx\')" class="linkexterno">www.gcc.com.mx</a>');
					$("#linkkubik").append('<a onclick="openurl(\'http://kubik.mx\')" >kubik.mx</a>');
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

	        var value = localStorage.getItem('kubik_torneos') || '';
			var actual=value;
			var res = value.split(","),
			i=0; 
			var nuevo="";
			for(i in res){ 
					if (res[i]!=idv && res[i]!="")
						nuevo+=","+res[i];
			} 
			localStorage.setItem("kubik_torneos", nuevo);

	        /*window.applicationPreferences.get("kubik_torneos", function(value) {
	              var actual=value;
	              var res = value.split(","),
	              i=0; 
	              var nuevo="";
	              for(i in res){ 
	              		if (res[i]!=idv && res[i]!="")
	              			nuevo+=","+res[i];
	              } 
	              window.applicationPreferences.set("kubik_torneos", nuevo, function() {},function(error) {});
	            
	        }, function(error) {});*/
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

	        var value = localStorage.getItem('kubik_eventos') || '';
			var actual=value;
			var res = value.split(","),
			i=0; 
			var nuevo="";
			for(i in res){ 
					if (res[i]!=idv && res[i]!="")
						nuevo+=","+res[i];
			} 
			localStorage.setItem("kubik_eventos", nuevo);

	        /*window.applicationPreferences.get("kubik_eventos", function(value) {
	              var actual=value;
	              var res = value.split(","),
	              i=0; 
	              var nuevo="";
	              for(i in res){ 
	              		if (res[i]!=idv && res[i]!="")
	              			nuevo+=","+res[i];
	              } 
	              window.applicationPreferences.set("kubik_eventos", nuevo, function() {},function(error) {});
	            
	        }, function(error) {});*/
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

	        var value = localStorage.getItem('kubik_actividades') || '';
			var actual=value;
			var res = value.split(","),
			i=0; 
			var nuevo="";
			for(i in res){ 
					if (res[i]!=idv && res[i]!="")
						nuevo+=","+res[i];
			} 
			localStorage.setItem("kubik_actividades", nuevo);

	        /*window.applicationPreferences.get("kubik_actividades", function(value) {
	              var actual=value;
	              var res = value.split(","),
	              i=0; 
	              var nuevo="";
	              for(i in res){ 
	              		if (res[i]!=idv && res[i]!="")
	              			nuevo+=","+res[i];
	              } 
	              window.applicationPreferences.set("kubik_actividades", nuevo, function() {},function(error) {});
	            
	        }, function(error) {});*/

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
function loadhadicap_damas(){

        $.ajax({
          type: "POST",
          url: "http://www.k-i.co/cc/webservices/handicap_damas.php",
          data: ({date: "last"}),
          cache: false,
          dataType: "text",
          success: onSuccesshandicap
        });
        
}
function loadhadicap_juniors(){

        $.ajax({
          type: "POST",
          url: "http://www.k-i.co/cc/webservices/handicap_juniors.php",
          data: ({date: "last"}),
          cache: false,
          dataType: "text",
          success: onSuccesshandicap
        });
        
}
function onSuccesshandicap(data)
{

    $("#detallehandicap").html( data);
    $(".botonbusquedahadi").click(function(){
    	var busqueda=formatea($("#nombretxt").val()); 
    	$("#detallehandicap table tr").each(function(){
    		var row=formatea($(this).find('td:eq(1)').text()); 
    		if (row.indexOf(busqueda)!=-1)
    			$(this).removeClass("troculto");
    		else
    			$(this).addClass("troculto");
    	});
    });
}
function formatea(cadena){

	  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", 
	      to   = "AAAAAEEEEIIIIOOOOUUUUAAAAAEEEEIIIIOOOOUUUUNNCC",
	      mapping = {};
	 
	  for(var i = 0, j = from.length; i < j; i++ )
	      mapping[ from.charAt( i ) ] = to.charAt( i );

	  var str =(cadena.toUpperCase());
	 

	      var ret = [];
	      for( var i = 0, j = str.length; i < j; i++ ) {
	          var c = str.charAt( i );
	          if( mapping.hasOwnProperty( str.charAt( i ) ) )
	              ret.push( mapping[ c ] );
	          else
	              ret.push( c );
	      }      
	  var regresa=ret.join( '' );
	return regresa;
}

function openurl(link){
	var ref = window.open(encodeURI(link), '_system');
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

function enviarcontacto(){
    $("#contact_form").hide();
    $("#mensajerespuesta").html("Espere un momento...");
    $.ajax({
      type: "POST",
      url: "http://www.k-i.co/cc/webservices/sendcontact.php",
      data: $("#contact_form").serialize(),
      success: function( data ) {
        $("#mensajerespuesta").html("Mensaje Enviado");
        $("#mensajerespuesta").show();
      },
      dataType: "json"
    });

    
}