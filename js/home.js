
var ss = new cordova.plugins.SecureStorage(
    function () { },
    function (error) { console.log('Error ' + error); },
    'gcc');

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
        insertkey(ss,"device_id",deviceID);
        window.plugins.OneSignal.init( "db69893c-153a-11e5-8e35-a78e6a279962",
                                        {googleProjectNumber: "988145283407",autoRegister: true},
                                        app.didReceiveRemoteNotificationCallBack);
        //this.openDb();
    },
    didReceiveRemoteNotificationCallBack : function(jsonData) {
        getIds();
    },
    openDb : function() {
        if (window.sqlitePlugin !== undefined) {
            app.db = window.sqlitePlugin.openDatabase("GCC",2);
        } else { }
    },
    createTable : function() {
        app.db.transaction(function(tx) {
            tx.executeSql("CREATE TABLE IF NOT EXISTS MyTable (id INTEGER PRIMARY KEY ASC, text_sample TEXT, date_sample DATETIME)", []);
        });
    },
    insertRecord : function(t) {
        app.db.transaction(function(tx) {
            var cDate = new Date();
            tx.executeSql("INSERT INTO MyTable(text_sample, date_sample) VALUES (?,?)",
                          [t, cDate],
                          app.onSuccess,
                          app.onError);
        });
    },
    selectAllRecords : function(fn) {
        app.db.transaction(function(tx) {
            tx.executeSql("SELECT * FROM MyTable ORDER BY id", [],
                          fn,
                          app.onError);
        });
    },
    onSuccess : function(tx, r) {
        alert("Your SQLite query was successful!");
    },

    onError : function(tx, e) {
        alert("SQLite Error: " + e.message);
    }
};


function sendTag() {
    window.plugins.OneSignal.sendTag("TagGeneral", "1");
}
function getIds() { 
    window.plugins.OneSignal.getIds(function(ids) {
        var myoneid= ids.userId;
        var deviceID = device.uuid;
        insertkey(ss,"onesignal_id",myoneid);
        

    });
}
function register(){
    window.plugins.OneSignal.registerForPushNotifications();

}

function getAllTheData() {
    var render = function (tx, rs) {
        for (var i = 0; i < rs.rows.length; i++) {
            var row=(rs.rows.item(i));
            string = string + row['text_sample'] + row['date_sample']+")\n";
        }
    }

    app.selectAllRecords(render);
}
function initdb(){
    app.createTable();
    app.insertRecord("prueba");
}



function insertkey(variable,key,value){
    variable.set(
    function (key) { console.log('Set ' + key); },
    function (error) { console.log('Error ' + error); },
    key, value);
}
function selectkey(variable,key,field){
    variable.get(
    function (value) { $("#"+field).val(value); },
    function (error) { $("#"+field).val(error); },
    key);
}
function removekey(variable,key,field){
    variable.remove(
    function (key) { $("#"+field).val(1); },
    function (error) { $("#"+field).val(error); },
    key);
}