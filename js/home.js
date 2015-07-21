

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
        /*
      if (jsonData.additionalData.id_articulo){
            switch(jsonData.additionalData.tabla) {
                case 'kubik_noticias':
                    alert('noticia '+ jsonData.additionalData.id_articulo);
                    break;
                case 'kubik_actividades':
                    alert('actividad '+ jsonData.additionalData.id_articulo);
                    break;
                case 'kubik_eventos':
                    alert('evento '+ jsonData.additionalData.id_articulo);
                    break;
                case 'kubik_torneos':
                    alert('torneo '+ jsonData.additionalData.id_articulo);
                    break;    
                default:
                    default alert('vacio');
            } 
      }*/

      alert("Notification received:\n" + JSON.stringify(datos.id_articulo));
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



