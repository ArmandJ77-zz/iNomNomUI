import HttpUtility from "./HttpUtility"

export default class AuthService {
    constructor(apiUrl) {
        this.Resource = "auth";
        this._httpUtil = new HttpUtility(apiUrl);
    }

    async Login(UserAuthenticationDto) {
        debugger;
        return await this._httpUtil.ExecuteAsync('post', `${this.Resource}/login`, UserAuthenticationDto)
    }
}