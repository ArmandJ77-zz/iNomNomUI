import authService from './authService'
export default class APIConnector {

    constructor(apiUrl) {
        this.AuthService = new authService(apiUrl);
    }
}