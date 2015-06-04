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

function loadmenuactivities(){
    $.getJSON("http://www.k-i.co/cc/webservices/actividadeslist.php", function(result){
        $.each(result, function(i, field){
            var bloque='<span><h3>'+field.padre.nombre+'</h3></span>';
            $("#listadeactividades").append(bloque);
            var bloque2 =""; 
            $.each(field.hijos, function(subi, subfield){ 
                bloque2+='<li><a href="actividades.html?idv='+subfield.id_categoria+'" class="btn_nextlist">'+subfield.nombre+'</a></li>';
            });
            $("#listadeactividades").append('<ul id="menuactividades">'+bloque2+'</ul>');
        });
    });

}

function loadinfoactivities(){
    $.getJSON("http://www.k-i.co/cc/webservices/actividades.php", function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="bordelist"><div class="articulo"><img src="http://k-i.co/cc/images/actividades/thumbs/'+field.imagen+'" >';
             bloque+= '<p><span>'+ field.nombre +' </span>'+field.intro+'</p>';
             bloque+= '<a href="actividad.html?idv='+field.id_actividad+'" data-id="'+field.id_actividad+'"></a>';
             bloque+= '</div><div class="clear"></div></div>';  

        $("#listado_normal").append(bloque);

        });
    });
}

function enviarcontacto(){
    $("#contact_form")
}

function loadinforestaurants(){
    $.getJSON("http://www.k-i.co/cc/webservices/restaurantes.php", function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="column_1_1 center"><img class="column_5_6 padding_sides" src="images/restaurantes/'+field.imagen+'" ><ul id="menurestaurantes"><li><a href="restaurantdetalle.html?idv='+field.id_restaurante+'" class="btn_nextlist">'+field.nombre+'</a></li> </ul></div>';  

        $("#listado_restaurants").append(bloque);

        });
    });
}