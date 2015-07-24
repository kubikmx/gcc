
var prefs = plugins.appPreferences;

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
    },
    didReceiveRemoteNotificationCallBack : function(jsonData) {
        var datos=jsonData.additionalData;
        var tabla=(datos.tabla);
        var articulo=(datos.id_articulo);

            if(tabla=='kubik_noticias'){
                prefs.store (okpreference, failpreference, 'notificacion_n_'+articulo, '1');
                prefs.fetch (calculanoticia, failpreference, 'notificacion_n');
                //window.location.href="detalle.html?idv="+articulo;
            }
            if(tabla=='kubik_actividades'){
                prefs.store (okpreference, failpreference, 'notificacion_a_'+articulo, '1');
                //window.location.href="actividad.html?idv="+articulo;
            }
            if(tabla=='kubik_eventos'){
                prefs.store (okpreference, failpreference, 'notificacion_e_'+articulo, '1');
                //window.location.href="detalle_aviso.html?idv="+articulo;
            }
            if(tabla=='kubik_torneos'){
                prefs.store (okpreference, failpreference, 'notificacion_t_'+articulo, '1');
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




function okpreference (value) {}
function failpreference (error) {}

function calculanoticia(value) {
    var nuevo=value+1
    prefs.store (okpreference, failpreference, 'notificacion_n', nuevo);
    $("#notificacion_n").html(nuevo);
}





