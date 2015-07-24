

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
                insertavar(tabla,articulo);
                updatemessages();
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

function insertavar(tabla,articulo){
    window.applicationPreferences.get(tabla, function(value) {
            var actual=value;
            var res = value.split(","),
            i=0,
            existe=0; 
            for(i in res){
                if (i==value) existe=1;
            }
            if (existe==0)
                actual+=","+value;
            }
            window.applicationPreferences.set(tabla, actual, function() {},function(error) {});
        }, function(error) {
            window.applicationPreferences.set(tabla, ","+articulo, function() {},function(error) {});
    });
}

function updatemessages(){
    window.applicationPreferences.get("kubik_noticias", function(value) {
        var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (i>0)
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_n").innerHTML = cuantos;
            document.getElementById("notificacion_n").style.display = "block";
        } else {
            document.getElementById("notificacion_n").style.display = "none";
        }
    }, function(error) {
            window.applicationPreferences.set("kubik_noticias", "", function() {},function(error) {});
            document.getElementById("notificacion_n").style.display = "none";
    });
}

