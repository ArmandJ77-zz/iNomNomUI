import axios from 'axios'

export default class HttpUtility {

    constructor(apiUrl) {
        this.HttpConnector = axios.create({
            baseURL: apiUrl
        });
    }

    ///Executes a RESFUL request and returns the extracted response
    async ExecuteAsync(verb, path, payload = null) {
        var result = null;
        debugger;
        var token = localStorage.getItem("token");
        this.HttpConnector.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        verb = verb.toLowerCase();
        switch (verb) {
            case 'get':
                (payload === null) ?
                await this.HttpConnector.get(`${path}`).then(response => {
                        result = response
                    })
                    .catch(response => {
                        result = response
                    }): await this.rHttpConnectorequester.get(`${path}`, payload).then(response => {
                        result = response
                    })
                    .catch(response => {
                        result = response
                    });
                break;
            case 'post':
                {
                    await this.HttpConnector.post(`${path}`, payload)
                    .then(response => {
                        result = response
                    })
                    .catch(response => {
                        result = response
                    });
                    break;
                }

            case 'put':
                await this.HttpConnector.put(`${path}`, payload).then(response => {
                        result = response
                    })
                    .catch(response => {
                        result = response
                    });
                break;
            case 'delete':
                await this.HttpConnector.delete(`${path}`, {
                        params: payload
                    }).then(response => {
                        result = response
                    })
                    .catch(response => {
                        result = response
                    });
        }

        return this._ExtractedResponse(result);
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