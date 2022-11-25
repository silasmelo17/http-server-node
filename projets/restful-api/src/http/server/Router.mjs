
import Route from './Route.mjs';

export const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

export class Router {

    constructor() {
        this._routes = [];
        this._path = '';
    }

    hasRoute(url, method) {
        // console.log(new Date().toISOString(), ' - Router has route - ', url, method);
        for(const route of this._routes) {
            // console.log(new Date().toISOString(), ' - Route - ', route.url, route.method);
            const isRoute = route.method === method && route.compare(url);
            if (isRoute) return route;
        }
    }

    get(url, ...handlers) {
        return this.handlerFactory(url, METHOD.GET, handlers);
    }

    post(url, ...handlers) {
        return this.handlerFactory(url, METHOD.POST, handlers);
    }

    put(url, ...handlers) {
        return this.handlerFactory(url, METHOD.PUT, handlers);
    }

    delete(url, ...handlers) {
        return this.handlerFactory(url, METHOD.DELETE, handlers);
    }

    handlerFactory(url, method, handlers) {
        const route = new Route(this._path + url, method, handlers);
        return this._routes.push(route);
    }

    set path(path) {
        for(const route of this._routes) {
            if (this._path !== '') route.url = route.replace(this._path, '');
            route.url = path + route.url;
        }

        this._path = path;
    }

}

export default Router;
