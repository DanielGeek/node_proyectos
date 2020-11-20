import express = require('express');

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(puerto: number) {
        this.port = puerto;
        this.app = express();
    }

    static init(puerto: number) {
        return new Server(puerto);
    }

    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }

}