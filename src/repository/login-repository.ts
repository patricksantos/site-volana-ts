import { AuthAdapter } from "../adapter/auth-adapter";
import { AuthData } from "../core/entity/auth";
import { LoginError } from "../core/errors/login-error";
import { ILoginRepository } from "../core/repository/i-login-repository";
import { login, logout } from "../core/services/auth";
import loginService from "../core/services/request/login.service";
import { Either, left, returnEitherAxios, right } from "../shared/utils/either";

// class SessionSingleton {
//     private static instance: SessionSingleton;
//     private constructor() { }

//     public static getInstance(): SessionSingleton {
//         if (!SessionSingleton.instance) {
//             SessionSingleton.instance = new SessionSingleton();
//         }
//         return SessionSingleton.instance;
//     }

//     public authData: AuthData | null = null;

//     public setAuthData(authData: AuthData) {
//         this.authData = authData;
//     }

//     public getAuthData(): AuthData | null {
//         return this.authData;
//     }
// }

export class LoginRepository implements ILoginRepository {
    private loginDatabase = loginService;

    public async loginAccount(email: string, password: string): Promise<Either<LoginError, AuthData>> {
        try {
            var responseAxios = await this.loginDatabase.post<AuthData>(email, password)
                .then((response) => {
                    var authInstance: AuthData = AuthAdapter.create(response.data);
                    login(authInstance.token);
                    return right(authInstance);
                }).catch((error) => {
                    var errorLogin: Array<any> = error.response.data.message;
                    var authErrorInstance: LoginError = AuthAdapter.createError(errorLogin);
                    return left(authErrorInstance);
                });

            return returnEitherAxios<LoginError, AuthData>(responseAxios);
        } catch {
            return left(new LoginError('Error LoginDatabase Catch'));
        }
    }

    public logoutAccount(): void {
        logout();
    }
}