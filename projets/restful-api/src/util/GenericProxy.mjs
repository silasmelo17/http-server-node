
class GenericProxy {
    constructor(targets = []) {
        if (!Array.isArray(targets)) targets = [targets];
        this._targets = targets;
    }

    static factory(response) {
        const instance = new this(response);
        return new Proxy(instance, { 
            get: instance.get,
            set: instance.set,
        });
    }

    get (target, prop) {
        const targets = [ target, ...(target._targets || []) ];
        for(const obj of targets) {
            if (obj[prop]) return obj[prop];
        }
    }

    set (target, prop, value) {
        const targets = [ target, ...(target._targets || []) ];
        for(const obj of targets) {
            if (!obj[prop]) continue;
            obj[prop] = value;
            return true;    
        }

        return false;
    }
}

export default GenericProxy;