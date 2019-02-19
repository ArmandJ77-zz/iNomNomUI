import HttpUtility from "./HttpUtility"

export default class UserService {
    constructor(apiUrl) {
        this.Resource = "user";
        this._httpUtil = new HttpUtility(apiUrl);
    }

    async Get() {
        return await this._httpUtil.ExecuteAsync('get', `${this.Resource}`)
    }
}