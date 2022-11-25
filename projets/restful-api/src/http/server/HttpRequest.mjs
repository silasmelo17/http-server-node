
import GenericProxy from "../../util/GenericProxy.mjs";

class HttpRequest extends GenericProxy {

    constructor(req) {
        super(req);
        this._request = req;

        const [url, query] = req.url.split('?');
        this.url = url;
        this.query = this._queryParser(query);
        this.params = {};
        this.headers = req.headers;
        this.method = req.method.toUpperCase();
    }

    _queryParser(query) {
        if (!query) return {};

        const variables = query.split('&');
        return variables.reduce((acc, keyAndValue) => {
            const [key, value] = keyAndValue.split('=');
            return { ...acc, [key]: value };
        }, {});
    }

    paramsParser(routeUrl) {
        const urlSegments = this.url.split('/').filter(Boolean);
        const routeUrlSegments = routeUrl.split('/').filter(Boolean);

        if (urlSegments.length !== routeUrlSegments.length) return;

        for(const i in routeUrlSegments) {
            const segment = routeUrlSegments[i];
            if (!segment.startsWith(':')) continue;

            this.params[segment.replace(':', '')] = urlSegments[i];
        }
    }

}

export default HttpRequest;
