

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
        
        /*window.plugins.OneSignal.init( "db69893c-153a-11e5-8e35-a78e6a279962",
                                        {googleProjectNumber: "988145283407",autoRegister: true},
                                        app.didReceiveRemoteNotificationCallBack);
        updatemessages();*/

        window.analytics.startTrackerWithId('UA-65940888-1');
    },
    didReceiveRemoteNotificationCallBack : function(jsonData) {
        var datos=jsonData.additionalData;
        var tabla=(datos.tabla);
        var articulo=(datos.id_articulo);

            if(tabla=='kubik_noticias'){
                insertavar(tabla,articulo);
            }
            if(tabla=='kubik_actividades'){
                insertavar(tabla,articulo);
            }
            if(tabla=='kubik_eventos'){
                insertavar(tabla,articulo);
            }
            if(tabla=='kubik_torneos'){
                insertavar(tabla,articulo);
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

function onPrompt(results) {
}

function insertavar(tabla,articulo){


    navigator.notification.prompt(
        'Notificaci\u00f3n Recibida', 
        onPrompt
    );

    var value = localStorage.getItem(tabla) || ''; 
    var actual=value;
            var res = value.split(","),
            i=0,
            existe=0; 
            for(i in res){ 
                if (res[i]==articulo) existe=1;
            }
            if (existe==0)
                actual+=","+articulo;

    localStorage.setItem(tabla, actual); 
    updatemessages();

}

function updatemessages(){
    var value = localStorage.getItem('kubik_noticias') || '';
    var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (res[i]!="")
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_n").innerHTML = cuantos;
            document.getElementById("notificacion_n").style.display = "block";
        } else {
            document.getElementById("notificacion_n").style.display = "none";
        }

    ////////////////////////
    var value = localStorage.getItem('kubik_actividades') || '';
    var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (res[i]!="")
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_a").innerHTML = cuantos;
            document.getElementById("notificacion_a").style.display = "block";
        } else {
            document.getElementById("notificacion_a").style.display = "none";
        }
    //////////////////////////
    var value = localStorage.getItem('kubik_eventos') || '';
    var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (res[i]!="")
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_e").innerHTML = cuantos;
            document.getElementById("notificacion_e").style.display = "block";
        } else {
            document.getElementById("notificacion_e").style.display = "none";
        }
    ///////////////////////
    var value = localStorage.getItem('kubik_torneos') || '';
    var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (res[i]!="")
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_t").innerHTML = cuantos;
            document.getElementById("notificacion_t").style.display = "block";
        } else {
            document.getElementById("notificacion_t").style.display = "none";
        }            
   
}

