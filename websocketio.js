var server = require('websocket.io').listen(4502)
server.on('connection', function (client) {
    client.on('message', function (data) {
        // �����Ă����o�C�i���[�f�[�^���R���\�[���ɏo��
        for (var i = 0; i < data.length; i++) {
            console.log('[' + i + ']=0x' + data[i].toString(16));
        }
        // �����Ă����o�C�i���[�f�[�^���N���C�A���g�ɃG�R�[
        client.send(data, true);
    });
    client.on('close', function () { });
});