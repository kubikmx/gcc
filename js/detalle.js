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
		$("#titulo_detalle").html("<img src='images/loadercircle.gif'>");
		$.ajaxSetup({ cache: false });
		$.post("http://www.k-i.co/cc/webservices/detalle_noticias.php?id="+idv+'&r='+Math.random(), function(result){
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
			localStorage.setItem("kubik_noticias", nuevo); $(".parrafodetalle").append('<span class="blanco">'+nuevo+'</span>');

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

	    },'json');
	}


}

function onLoadcontact(){
	var idv=10;
	
	if (idv!=0){

		$.post("http://www.k-i.co/cc/webservices/detalle_noticias.php?id="+idv, function(result){
	        //$.each(result, function(i, field){
				//if (field.liga!=""){
					$(".parrafodetalle").append('<a onclick="openurl(\'http://www.gcc.com.mx\')" class="linkexterno">www.gcc.com.mx</a>');
					$("#linkkubik").append('<a onclick="openurl(\'http://kubik.mx\')" >kubik.mx</a>');
				//}
	        //});
	    },'json');
	}


}


function onLoadfundacion(){
	var idv=10;
	
	if (idv!=0){

		$.post("http://www.k-i.co/cc/webservices/detalle_noticias.php?id="+idv, function(result){
					$("#linkpresentacion").append('<a onclick="openurl(\'http://gcc.com.mx/presentacion.php\')" >Ver nuestra presentaci&oacute;n</a>');
					$("#linkinforme").append('<a onclick="openurl(\'http://gcc.com.mx/brochure.html\')" >Informe 2014</a>');
					$("#linkvideo").append('<a onclick="openurl(\'https://vimeo.com/80077029\')" ><img src="images/videofundacion.jpg" style="width:100%"></a>');
	    },'json');
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
		$("#titulo_detalle").html("<img src='images/loadercircle.gif'>");
		$.ajaxSetup({ cache: false });
		$.post("http://www.k-i.co/cc/webservices/detalle_torneo.php?id="+idv+'&r='+Math.random(), function(result){
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
	    },'json');
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
		$("#titulo_detalle").html("<img src='images/loadercircle.gif'>");
		$.ajaxSetup({ cache: false });
		$.post("http://www.k-i.co/cc/webservices/detalle_eventos.php?id="+idv+'&r='+Math.random(), function(result){
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
	    },'json');
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
		$("#titulo_detalle").html("<img src='images/loadercircle.gif'>");
		$.ajaxSetup({ cache: false });
		$.post("http://www.k-i.co/cc/webservices/detalle_actividad.php?id="+idv+'&r='+Math.random(), function(result){
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

	    },'json');
	}


}



function comparte(){
	var mensaje=$(".parrafodetalle").html();
	var titulo=$("#titulo_detalle").html();
	var imagen=$(".fotonoticia").attr("src");
	var subject=$("#titulo_detalle").html();
	var url="http://k-i.co/cc/share.php"+'?r='+Math.random();
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
		$("#namerestaurant").html("<img src='images/loadercircle.gif'>");
		$.ajaxSetup({ cache: false });
		$.post("http://www.k-i.co/cc/webservices/detalle_restaurant.php?id="+idv+'&r='+Math.random(), function(result){
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
	    },'json');
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
	$("#contentq").html("<img src='images/loadercircle.gif'>");
	$.ajaxSetup({ cache: false });
	$.ajax({
            type: "POST",
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

		$.ajaxSetup({ cache: false });
		$.post("http://www.k-i.co/cc/webservices/detalle_restaurant.php?id="+idv+'&r='+Math.random(), function(result){
	        $.each(result, function(i, field){
				$("#imagenzoom").attr("src","http://k-i.co/cc/images/restaurantes/"+field.menu);	
				zoomactive();
	        });
	    },'json');
	}

	
}

function zoomactive(){
    

}

function loadhadicap(){
		$("#detallehandicap").html("<img src='images/loadercircle.gif'>");
        $.ajaxSetup({ cache: false });
        $.ajax({
          type: "POST",
          url: "http://www.k-i.co/cc/webservices/handicap.php"+'?r='+Math.random(),
          data: ({date: "last"}),
          cache: false,
          dataType: "text",
          success: onSuccesshandicap
        });
        
}
function loadhadicap_damas(){
		$("#detallehandicap").html("<img src='images/loadercircle.gif'>");
        $.ajaxSetup({ cache: false });
        $.ajax({
          type: "POST",
          url: "http://www.k-i.co/cc/webservices/handicap_damas.php"+'?r='+Math.random(),
          data: ({date: "last"}),
          cache: false,
          dataType: "text",
          success: onSuccesshandicap
        });
        
}
function loadhadicap_juniors(){
		$("#detallehandicap").html("<img src='images/loadercircle.gif'>");
        $.ajaxSetup({ cache: false });
        $.ajax({
          type: "POST",
          url: "http://www.k-i.co/cc/webservices/handicap_juniors.php"+'?r='+Math.random(),
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
    	$("#detallehandicap table tr").each(function(index, value){ 
    		if (index>0){
	    		var row=formatea($(this).find('td:eq(1)').text()); 
	    		if (row.indexOf(busqueda)!=-1)
	    			$(this).removeClass("troculto");
	    		else
	    			$(this).addClass("troculto");
	    	}
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
	      url: "http://www.k-i.co/cc/webservices/opiniones.php"+'?r='+Math.random(),
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
      url: "http://www.k-i.co/cc/webservices/sendcontact.php"+'?r='+Math.random(),
      data: $("#contact_form").serialize(),
      success: function( data ) {
        $("#mensajerespuesta").html("Mensaje Enviado");
        $("#mensajerespuesta").show();
      },
      dataType: "json"
    });

    
}