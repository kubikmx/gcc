
 
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
        

        //console.log('Received Event: ' + id);
        
        //window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

        window.plugins.OneSignal.init( "db69893c-153a-11e5-8e35-a78e6a279962",
                                        {googleProjectNumber: "988145283407",autoRegister: true},
                                        app.didReceiveRemoteNotificationCallBack);
    },
    didReceiveRemoteNotificationCallBack : function(jsonData) {
        getIds();
    }
};

function sendTag() {
    window.plugins.OneSignal.sendTag("TagGeneral", "1");
}
function getIds() {
    window.plugins.OneSignal.getIds(function(ids) {
        var myoneid= ids.userId;
        var deviceID = device.uuid;
        alert(myoneid+"||"+deviceID)

    });
}
function register(){
    window.plugins.OneSignal.registerForPushNotifications();

}
