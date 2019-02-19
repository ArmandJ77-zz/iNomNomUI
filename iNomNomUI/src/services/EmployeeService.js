import HttpUtility from "./HttpUtility"

export default class EmployeeService {
    constructor(apiUrl) {
        this.Resource = "Employees";
        this._httpUtil = new HttpUtility(apiUrl);
    }

    async Get(id) {
        return await this._httpUtil.ExecuteAsync('get', `${this.Resource}/${id}`)
    }

    async GetList() {
        return await this._httpUtil.ExecuteAsync('get', `${this.Resource}`)
    }
}