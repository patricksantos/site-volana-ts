import { AuthData } from "../core/entity/auth";
import { LoginError } from "../core/errors/login-error";

export class AuthAdapter {
    public static create(json: any): AuthData {
        var type = json['type'];
        var token = json['token'];
        var refreshToken = json['refreshToken'];
        var authData = new AuthData(type, token, refreshToken);
        return authData;
    }

    public static createError(json: Array<any>): LoginError {
        var authDataError = new LoginError('Error Login Adapter')
        json.forEach((item, index) => {
            const field = item['field'];
            switch (field) {
                case 'email': {
                    authDataError.emailInvalid = item.message;
                    break;
                }
                case 'password': {
                    authDataError.passwordInvalid = item.message;
                    break;
                }
                default:
                    break;
            }
        })
        return authDataError;
    }
}