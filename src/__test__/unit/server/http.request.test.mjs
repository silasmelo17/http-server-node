
import HttpRequest from '../../../http/server/HttpRequest.mjs';

describe('HttpRequest', () => {
    const url = new URLSearchParams('http://localhost:3000');
    url.append('name', 'Alan');
    url.append('age', 21);
    url.append('male', true);

    const request = new HttpRequest({
        url: url.toString(),
        method: 'GET'
    });

    it('Should format query', () => {
        expect(request.query).toMatchObject({
            name: expect.any(String),
            age: expect.any(Number),
        });

        expect(request.query.name).toEqual(name);
        expect(request.query.age).toEqual(age);
    });

});
