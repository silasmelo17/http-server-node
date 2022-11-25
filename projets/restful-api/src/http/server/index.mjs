
import http from 'http';
import HttpRequest from './HttpRequest.mjs';
import HttpResponse from './HttpResponse.mjs';
import { StatusCode, NotFoundError } from '../../util/ResponseError.mjs';

class Server {

    constructor() {
        this._routers = [];
        this._server = http.createServer(this._handlerTryCatcher.bind(this));
    }

    async _handlerTryCatcher(req, res) {
        const request = HttpRequest.factory(req);
        const response = HttpResponse.factory(res);

        try {
            return await this._handler(request, response);
        } catch(err) {
            const statusCode = err.statusCode || StatusCode.INTERNAL_ERROR;
            return response.status(statusCode).json({
                statusCode,
                error: err.name,
                message: err.message,
            });
        }
    }

    async _handler(req, res) {
        for(const router of this._routers) {
            const route = router.hasRoute(req.url, req.method);
            if (!route) continue;

            return route.process(req, res);
        }

        throw new NotFoundError('Route not found.');
    }

    use(_path, router) {
        router.path = _path;
        this._routers.push(router);
    }

    listen(port, handler) {
        this._server.listen(port, handler);
    }

}

export default Server;
