function onLoad(){
  loadinfo();
}

function loadinfo(){
  //window.analytics.startTrackerWithId('UA-65940888-1');
  //window.analytics.trackView('Noticias');

  
  $.getJSON("http://www.k-i.co/cc/webservices/noticias.php"+'?r='+Math.random(), function(result){
        $.each(result, function(i, field){
          var bloque=  '<div class="bordelist" id="element_'+field.id_noticia+'"><div class="articulo"><a href="detalle.html?idv='+field.id_noticia+'" data-id="'+field.id_noticia+'"><img src="http://k-i.co/cc/images/noticias/thumbs/'+field.imagen+'" ></a>';
           bloque+= '<p><a href="detalle.html?idv='+field.id_noticia+'" data-id="'+field.id_noticia+'"><span>'+ field.nombre +' </span>'+field.intro+'</a></p>';
           bloque+= '<a href="detalle.html?idv='+field.id_noticia+'" data-id="'+field.id_noticia+'" class="flechamedio"></a>';
           bloque+= '</div><div class="clear"></div></div>';  

            $("#listado_normal").append(bloque);

        });

        var value = localStorage.getItem('kubik_noticias') || '';
        var actual=value;
          var res = value.split(","),
          i=0,
          existe=0; 
          for(i in res){ 
              $("#element_"+res[i]).append('<div class="alertblock"></div>');
          }

    });
}

function loadtorneos(){
    //window.analytics.startTrackerWithId('UA-65940888-1');
    //window.analytics.trackView('Torneos');

    
    $.getJSON("http://www.k-i.co/cc/webservices/torneos.php"+'?r='+Math.random(), function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="bordelist" id="element_'+field.id_torneo+'"><div class="articulo"><a href="detalle_torneo.html?idv='+field.id_torneo+'" data-id="'+field.id_torneo+'"><img src="http://k-i.co/cc/images/torneos/thumbs/'+field.imagen+'" ></a>';
             bloque+= '<p><a href="detalle_torneo.html?idv='+field.id_torneo+'" data-id="'+field.id_torneo+'"><span>'+ field.nombre +' </span>'+field.intro+'</a></p>';
             bloque+= '<a href="detalle_torneo.html?idv='+field.id_torneo+'" data-id="'+field.id_torneo+'" class="flechamedio"></a>';
             bloque+= '</div><div class="clear"></div></div>';  

        $("#listado_normal").append(bloque);

        });
        var value = localStorage.getItem('kubik_torneos') || '';

            var actual=value;
              var res = value.split(","),
              i=0,
              existe=0; 
              for(i in res){ 
                  $("#element_"+res[i]).append('<div class="alertblock"></div>');
              }


    });
}



function loadavisos(){
  //window.analytics.startTrackerWithId('UA-65940888-1');
  //window.analytics.trackView('Avisos');

  
  $.getJSON("http://www.k-i.co/cc/webservices/eventos.php"+'?r='+Math.random(), function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="bordelist" id="element_'+field.id_evento+'"><div class="articulo"><a href="detalle_aviso.html?idv='+field.id_evento+'" data-id="'+field.id_evento+'"><img src="http://k-i.co/cc/images/eventos/thumbs/'+field.imagen+'" ></a>';
           bloque+= '<p><a href="detalle_aviso.html?idv='+field.id_evento+'" data-id="'+field.id_evento+'"><span>'+ field.nombre +' </span>'+field.intro+'</a></p>';
           bloque+= '<a href="detalle_aviso.html?idv='+field.id_evento+'" data-id="'+field.id_evento+'" class="flechamedio"></a>';
           bloque+= '</div><div class="clear"></div></div>';  

          $(".listado_eventos").append(bloque);

        });

        var value = localStorage.getItem('kubik_eventos') || '';
            var actual=value;
              var res = value.split(","),
              i=0,
              existe=0; 
              for(i in res){ 
                  $("#element_"+res[i]).append('<div class="alertblock"></div>');
              }

    });
}

function loadmenuactivities(){
  //window.analytics.startTrackerWithId('UA-65940888-1');
  //window.analytics.trackView('Actividades');

    
    $.getJSON("http://www.k-i.co/cc/webservices/actividadeslist.php"+'?r='+Math.random(), function(result){
        $.each(result, function(i, field){
            var bloque='<span><h3>'+field.padre.nombre+'</h3></span>';
            $("#listadeactividades").append(bloque);
            var bloque2 =""; 
            $.each(field.hijos, function(subi, subfield){ 
                bloque2+='<li><a href="actividades.html?idv='+subfield.id_categoria+'" class="btn_nextlist" data-actividades="'+subfield.actividades+'">'+subfield.nombre+'</a></li>';
            });
            $("#listadeactividades").append('<ul id="menuactividades">'+bloque2+'</ul>');
        });

        var value = localStorage.getItem('kubik_actividades') || '';
            var actual=value;
              var res = value.split(","),
              i=0,
              existe=0; 
              for(i in res){ 
                  $(".btn_nextlist").each(function() {
                      var actuales=$(this).data("actividades");
                      if (actuales.indexOf("|"+res[i]+"|")!=-1 && res[i]!=""){
                          $(this).append('<div class="alertlistblock"></div>');
                      }
                  });
              }
    });

}

function loadinfoactivities(){
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
        
        $.getJSON("http://www.k-i.co/cc/webservices/actividades.php?id="+idv, function(result){
            $.each(result, function(i, field){
             var bloque=  '<div class="bordelist" id="element_'+field.id_actividad+'"><div class="articulo"><a href="actividad.html?idv='+field.id_actividad+'" data-id="'+field.id_actividad+'"><img src="http://k-i.co/cc/images/actividades/thumbs/'+field.imagen+'" ></a>';
                 bloque+= '<p><a href="actividad.html?idv='+field.id_actividad+'" data-id="'+field.id_actividad+'"><span>'+ field.nombre +' </span>'+field.intro+'</a></p>';
                 bloque+= '<a href="actividad.html?idv='+field.id_actividad+'" data-id="'+field.id_actividad+'" class="flechamedio"></a>';
                 bloque+= '</div><div class="clear"></div></div>';  

            $("#listado_normal").append(bloque);
            $(".icontitle").html(field.categoria);
            if (field.imagencat!=""){
                $("#imgheader").attr("src","http://www.k-i.co/cc/images/categorias/"+field.imagencat);
            }

            });

            var value = localStorage.getItem('kubik_actividades') || '';
                var actual=value;
                  var res = value.split(","),
                  i=0,
                  existe=0; 
                  for(i in res){ 
                      $("#element_"+res[i]).append('<div class="alertblock"></div>');
                  }


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

function loadinforestaurants(){
    $.getJSON("http://www.k-i.co/cc/webservices/restaurantes.php"+'?r='+Math.random(), function(result){
        $.each(result, function(i, field){
         var bloque=  '<div class="column_1_1 center"><a href="restaurantdetalle.html?idv='+field.id_restaurante+'"><img class="column_5_6 padding_sides" src="http://k-i.co/cc/images/restaurantes/'+field.imagen+'" ></a><ul id="menurestaurantes"><li><a href="restaurantdetalle.html?idv='+field.id_restaurante+'" class="btn_nextlist">'+field.nombre+'</a></li> </ul></div><div class="clear padding"></div>';  

        $("#listado_restaurants").append(bloque);

        });
    });
}

