

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        
        window.plugins.OneSignal.init( "db69893c-153a-11e5-8e35-a78e6a279962",
                                        {googleProjectNumber: "988145283407",autoRegister: true},
                                        app.didReceiveRemoteNotificationCallBack);
        updatemessages();
    },
    didReceiveRemoteNotificationCallBack : function(jsonData) {
        var datos=jsonData.additionalData;
        var tabla=(datos.tabla);
        var articulo=(datos.id_articulo);

            if(tabla=='kubik_noticias'){
                actualizacirculo("#notificacion_n");
                insertavar(tabla,articulo);
                //window.location.href="detalle.html?idv="+articulo;
            }
            if(tabla=='kubik_actividades'){
                //window.location.href="actividad.html?idv="+articulo;
            }
            if(tabla=='kubik_eventos'){
                //window.location.href="detalle_aviso.html?idv="+articulo;
            }
            if(tabla=='kubik_torneos'){
                //window.location.href="detalle_torneo.html?idv="+articulo;
            }
    }
};


function sendTag() {
    window.plugins.OneSignal.sendTag("TagGeneral", "1");
}
function getIds() { 
    window.plugins.OneSignal.getIds(function(ids) {
        var myoneid= ids.userId;
        var deviceID = device.uuid;
    });
}
function register(){
    window.plugins.OneSignal.registerForPushNotifications();

}

function actualizacirculo(cual){
    var actual=$(cual).html();
    actual++;
    $(cual).html(actual);
}

function insertavar(tabla,articulo){
    window.applicationPreferences.get(tabla, function(value) {
            var actual=value;
            if (actual.indexOf(","+value) ){
                //Ya existe
            } else {
                actual+=","+value;
            }
            window.applicationPreferences.set(tabla, actual, function() {},function(error) {});
        }, function(error) {
            window.applicationPreferences.set(tabla, ","+articulo, function() {},function(error) {});
    });
}

function updatemessages(){
    window.applicationPreferences.get("kubik_noticias", function(value) {
        var res = str.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            cuantos++;
        }
        document.getElementById("notificacion_n").innerHTML = cuantos;
        document.getElementById("notificacion_n").style.display = "block";
    }, function(error) {
            window.applicationPreferences.set("kubik_noticias", "", function() {},function(error) {});
            document.getElementById("notificacion_n").style.display = "none";
    });
}

