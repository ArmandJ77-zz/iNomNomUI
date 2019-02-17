import axios from 'axios'

export default class HttpUtility {

    constructor(apiUrl) {
        this.HttpConnector = axios.create({
            baseURL: apiUrl
        });
    }

    ///Executes a RESFUL request and returns the extracted response
    async ExecuteAsync(verb, path, payload = null) {
        debugger;
        var response = null;
        verb = verb.toLowerCase();
        switch (verb) {
            case 'get':
                response = (payload === null) ? await this.HttpConnector.get(`${path}`) : await this.rHttpConnectorequester.get(`${path}`, payload);
                break;
            case 'post':
                response = await this.HttpConnector.post(`${path}`, payload);
                break;
            case 'put':
                response = await this.HttpConnector.put(`${path}`, payload);
                break;
            case 'delete':
                response = await this.HttpConnector.delete(`${path}`, {
                    params: payload
                });
        }

        return this._ExtractedResponse(response);
    }

    ///Private function to extract the response from the REST request
    _ExtractedResponse(httpResponse) {
        debugger;
        if (httpResponse.hasOwnProperty('data'))
            return {
                data: httpResponse.data,
                statusCode: httpResponse.status
            }

        if (httpResponse.response === undefined)
            return {
                data: httpResponse.message,
                statusCode: '503'
            }

        return {
            data: httpResponse.response.data.error,
            statusCode: httpResponse.response.status
        }
    }
}