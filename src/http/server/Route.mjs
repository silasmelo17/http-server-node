
import HttpRequest from "./HttpRequest.mjs";

class Route {

    constructor(url, method, handlers) {
        this.url = url;
        this.method = method;
        this.handlers = handlers;
    }

    async process(req, res) {
        req.paramsParser(this.url);
        this._print(req);

        const handler = this.handlers[0];
        return handler(req, res);
    }

    compare(url) {
        const urlSegments = this.url.split('/').filter(Boolean);
        const currentUrlSegments = url.split('/').filter(Boolean);

        if (urlSegments.length !== currentUrlSegments.length) return false;

        for(const i in urlSegments) {
            const segment = urlSegments[i];
            if (segment.startsWith(':')) continue;
            if (segment !== currentUrlSegments[i]) return false;
        }

        return true;
    }

    _print(req) {
        console.log(new Date().toISOString(), ` - REQUEST ${this.method} ${this.url} - `, JSON.stringify({
            url: req.url,
            method: req.method,
            query: req.query,
            params: req.params,
            headers: req.headers,
        }));
    }

}

export default Route;