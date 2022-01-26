import { Either } from "../../shared/utils/either";
import { AuthData } from "../entity/auth";
import { LoginError } from "../errors/login-error";

export interface ILoginRepository {
    loginAccount(email: string, password: string): Promise<Either<LoginError, AuthData>>;
    logoutAccount(): void;
}