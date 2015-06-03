function onLoad(){
	loadinfo();
}

function loadinfo(){
	$.getJSON("http://www.k-i.co/cc/webservices/noticias.php", function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="bordelist"><div class="articulo"><img src="http://k-i.co/cc/images/noticias/thumbs/'+field.imagen+'" >';
         	 bloque+= '<p><span>'+ field.nombre +' </span>'+field.intro+'</p>';
			 bloque+= '<a href="detalle.html?idv='+field.id_noticia+'" data-id="'+field.id_noticia+'"></a>';
			 bloque+= '</div><div class="clear"></div></div>';	

		$("#listado_normal").append(bloque);

        });
    });
}

function loadavisos(){
	$.getJSON("http://www.k-i.co/cc/webservices/eventos.php", function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="bordelist"><div class="articulo"><img src="http://k-i.co/cc/images/eventos/thumbs/'+field.imagen+'" >';
         	 bloque+= '<p><span>'+ field.nombre +' </span>'+field.intro+'</p>';
			 bloque+= '<a href="detalle_aviso.html?idv='+field.id_evento+'" data-id="'+field.id_evento+'"></a>';
			 bloque+= '</div><div class="clear"></div></div>';	

		$(".listado_eventos").append(bloque);

        });
    });
}