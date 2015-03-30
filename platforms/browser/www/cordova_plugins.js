cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.chromium.system.network/system.network.js",
        "id": "org.chromium.system.network.system.network",
        "clobbers": [
            "chrome.system.network"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.chromium.system.network": "1.1.1"
}
// BOTTOM OF METADATA
});