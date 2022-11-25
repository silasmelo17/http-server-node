
import GenericProxy from "../../util/GenericProxy.mjs";

class HttpResponse extends GenericProxy {

    constructor(response) {
        super(response);
        this._response = response;
        this._headers = {};
    }

    header(key, value) {
        this._headers[key] = value;
        return this;
    }

    status(code) {
        this._response.statusCode = code;
        return this;
    }

    json(data) {
        if (typeof data === 'object') data = JSON.stringify(data);
        this.header('Content-Type', 'application/json');

        console.log(new Date().toISOString(), ` - RESPONSE ${this._response.statusCode} - `, data);
        
        this._response.writeHead(this._response.statusCode, this._headers);
        this._response.write(data);
        this._response.end();
    }

}

export default HttpResponse;
