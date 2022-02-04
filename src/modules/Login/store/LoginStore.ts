import { makeAutoObservable, action, observable } from "mobx";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../../core/entity/auth";
import { LoginError } from "../../../core/errors/login-error";
import { ILoginRepository } from "../../../core/repository/i-login-repository";
import { LoginUser } from "../../../core/usecase/login-user";
import { Either } from "../../../shared/utils/either";

interface SetErrors {
    email: string;
    password: string;
    message: string;
}

export class LoginStore {
    private navigate = useNavigate();
    private loginUser: LoginUser;

    constructor(private loginRepository: ILoginRepository) {
        this.loginUser = new LoginUser(this.loginRepository);
        makeAutoObservable(this);
    }

    @observable
    private email: string = '';

    @observable
    private password: string = '';

    @observable
    private errors: SetErrors = {
        email: '',
        password: '',
        message: '',
    };

    @action
    public emailTextHandler(value: string) {
        this.email = value;
    }

    @action
    public passwordTextHandler(value: string) {
        this.password = value;
    }

    @action
    public async login(email: string, password: string): Promise<void> {
        try {
            const loginData: Either<LoginError, AuthData> = await this.loginUser.login(email, password);
            if (loginData.isRight()) {
                this.navigate('/dashboard');
            } else if (loginData.isLeft()) {
                var valueLoginError = loginData.value;
                this.errors = {
                    email: valueLoginError.emailInvalid ? valueLoginError.emailInvalid : '',
                    password: valueLoginError.passwordInvalid ? valueLoginError.passwordInvalid : '',
                    message: valueLoginError.message ? valueLoginError.message : '',
                }
            }
        } catch (e) {
            this.errors = { email: '', password: '', message: 'Tente novamente' }
        }
    }

    public logout(): void {
        this.loginUser.logout();
    }

    public get getEmail(): string {
        return this.email;
    };

    public get getPassword(): string {
        return this.password;
    };

    public get getErrors(): SetErrors {
        console.log(this.errors);
        return this.errors;
    }

}