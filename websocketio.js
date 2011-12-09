var server = require('websocket.io').listen(4502)
server.on('connection', function (client) {
    client.on('message', function (data) {
        // 送られてきたバイナリーデータをコンソールに出力
        for (var i = 0; i < data.length; i++) {
            console.log('[' + i + ']=0x' + data[i].toString(16));
        }
        // 送られてきたバイナリーデータをクライアントにエコー
        client.send(data, true);
    });
    client.on('close', function () { });
});