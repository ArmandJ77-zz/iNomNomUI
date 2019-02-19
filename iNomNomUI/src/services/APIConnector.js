import authService from './authService'
import EmployeeService from './EmployeeService'
import UserService from './UserService'
export default class APIConnector {

    constructor(apiUrl) {
        this.AuthService = new authService(apiUrl);
        this.EmployeeService = new EmployeeService(apiUrl);
        this.UserService = new UserService(apiUrl);
    }
}