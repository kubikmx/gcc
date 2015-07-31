

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

function insertavar(tabla,articulo){
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

    /*
    window.applicationPreferences.get(tabla, function(value) {
            var actual=value;
            var res = value.split(","),
            i=0,
            existe=0; 
            for(i in res){ 
                if (res[i]==articulo) existe=1;
            }
            if (existe==0)
                actual+=","+articulo;
            window.applicationPreferences.set(tabla, actual, function() {updatemessages();},function(error) {});
        }, function(error) {
            window.applicationPreferences.set(tabla, ","+articulo, function() {updatemessages();},function(error) {});
    });
    */
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
                
    /*
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

    window.applicationPreferences.get("kubik_actividades", function(value) {
        var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (i>0)
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_a").innerHTML = cuantos;
            document.getElementById("notificacion_a").style.display = "block";
        } else {
            document.getElementById("notificacion_a").style.display = "none";
        }
    }, function(error) {
            window.applicationPreferences.set("kubik_actividades", "", function() {},function(error) {});
            document.getElementById("notificacion_a").style.display = "none";
    });

    window.applicationPreferences.get("kubik_eventos", function(value) {
        var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (i>0)
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_e").innerHTML = cuantos;
            document.getElementById("notificacion_e").style.display = "block";
        } else {
            document.getElementById("notificacion_e").style.display = "none";
        }
    }, function(error) {
            window.applicationPreferences.set("kubik_eventos", "", function() {},function(error) {});
            document.getElementById("notificacion_e").style.display = "none";
    });

    window.applicationPreferences.get("kubik_torneos", function(value) {
        var res = value.split(","),
        i=0,
        cuantos=0; 
        for(i in res){
            if (i>0)
                cuantos++;
        }
        if (cuantos>0){
            document.getElementById("notificacion_t").innerHTML = cuantos;
            document.getElementById("notificacion_t").style.display = "block";
        } else {
            document.getElementById("notificacion_t").style.display = "none";
        }
    }, function(error) {
            window.applicationPreferences.set("kubik_torneos", "", function() {},function(error) {});
            document.getElementById("notificacion_t").style.display = "none";
    });
    */
}

