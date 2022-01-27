import { Either } from "../../shared/utils/either";
import { AuthData } from "../entity/auth";
import { LoginError } from "../errors/login-error";
import { ILoginRepository } from "../repository/i-login-repository";

export class LoginUser {
    constructor(private repositoryLogin: ILoginRepository) { };

    public async login(email: string, password: string): Promise<Either<LoginError, AuthData>> {
        return this.repositoryLogin.loginAccount(email, password);
    }

    public logout(): void {
        this.repositoryLogin.logoutAccount();
    }
}