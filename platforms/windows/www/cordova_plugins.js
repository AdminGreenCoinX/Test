cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.albahra.plugin.networkinterface/www/networkinterface.js",
        "id": "com.albahra.plugin.networkinterface.networkinterface",
        "clobbers": [
            "window.networkinterface"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.albahra.plugin.networkinterface": "1.0.7"
}
// BOTTOM OF METADATA
});