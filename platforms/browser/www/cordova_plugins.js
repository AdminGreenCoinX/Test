cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.albahra.plugin.networkinterface/www/networkinterface.js",
        "id": "com.albahra.plugin.networkinterface.networkinterface",
        "clobbers": [
            "window.networkinterface"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/src/browser/NetworkProxy.js",
        "id": "org.apache.cordova.network-information.NetworkProxy",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.albahra.plugin.networkinterface": "1.0.7",
    "org.apache.cordova.network-information": "0.2.15"
}
// BOTTOM OF METADATA
});