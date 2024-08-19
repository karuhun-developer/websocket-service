const AuthMiddleware = require('../middleware/auth')

class TestHandler {
    static Namespace = '/test'

    constructor(io) {
        // io.of(TestHandler.Namespace).use(AuthMiddleware.handle)
        io.of(TestHandler.Namespace)
        .on('connection', client => {
            this.start(io, client)
        })
    }

    start(io, client) {
        console.log(`client with id ${client.id} connected`);
        console.log('read hanshake', client.handshake.auth);

        client.on('update', (data) => {
            client.emit('waduh', {
                message: data
            })
        })

        // Handle DISCONNECT
        client.on('disconnect', () => {
            console.log(`client with id ${client.id} disconnected`);
        })
    }
}

module.exports = TestHandler
