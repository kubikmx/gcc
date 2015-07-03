
 
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
        app.openDb();
    },
    didReceiveRemoteNotificationCallBack : function(jsonData) {
        getIds();
    },
    openDb : function() {
        if (window.sqlitePlugin !== undefined) {
            app.db = window.sqlitePlugin.openDatabase("GCC",2);
        } else {
            alert("no esta definido");
        }
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
        alert(myoneid+"||"+deviceID)

    });
}
function register(){
    window.plugins.OneSignal.registerForPushNotifications();

}

function getAllTheData() {
    var render = function (tx, rs) {
        for (var i = 0; i < rs.rows.length; i++) {
            alert(rs.rows.item(i));
        }
    }

    app.selectAllRecords(render);
}
function initdb(){
    app.createTable();
    app.insertRecord();
}
