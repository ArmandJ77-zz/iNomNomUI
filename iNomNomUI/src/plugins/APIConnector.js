import APIConnector from '../services/APIConnector';

export default {
    install(Vue, options) {
        this._connector = new APIConnector(options.apiUrl);

        Vue.prototype.$APIConnector = this._connector;
        Vue.prototype.baseUrl = options.api;
    }
}