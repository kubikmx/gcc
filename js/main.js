function onLoad(){
	//document.title = App.Properties.__caption;	
	//document.getElementById('blockName').innerText = App.Properties.__caption;
	loadinfo();
}

function loadinfo(){
	$.getJSON("http://www.k-i.co/cc/webservices/noticias.php", function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="bordelist"><div class="articulo"><img src="http://k-i.co/cc/images/noticias/thumbs/'+field.imagen+'" >';
         	 bloque+= '<p><span>'+ field.nombre +' </span>'+field.intro+'</p>';
			 bloque+= '<a href="detalle.html?id='+field.id_noticia+'" data-id="'+field.id_noticia+'"></a>';
			 bloque+= '</div><div class="clear"></div></div>';	

		$("#listado_normal").append(bloque);	 

        });
    });


}