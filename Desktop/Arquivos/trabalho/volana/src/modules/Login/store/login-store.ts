import { useNavigate } from "react-router-dom";
import { AuthData } from "../../../core/entity/auth";
import { LoginError } from "../../../core/errors/login-error";
import { ILoginRepository } from "../../../core/repository/i-login-repository";
import { LoginUser } from "../../../core/usecase/login-user";
import { Either } from "../../../shared/utils/either";
import loginStyles from "../styles";

interface setErrors {
    email: string;
    password: string;
    message: string;
}

export class LoginStore {
    private navigate = useNavigate();
    public classes = loginStyles();
    
    private loginUser: LoginUser;

    constructor(private loginRepository: ILoginRepository) {
        this.loginUser = new LoginUser(this.loginRepository);
    }

    public async login(
        event: any,
        email: string,
        password: string,
        setErrors: React.Dispatch<React.SetStateAction<setErrors>>,
    ): Promise<void> {
        event.preventDefault();
        try {
            const loginData: Either<LoginError, AuthData> = await this.loginUser.login(email, password);
            if (loginData.isRight()) {
                this.navigate('/dashboard');
            } else if (loginData.isLeft()) {
                var valueLoginError = loginData.value;
                setErrors({
                    email: valueLoginError.emailInvalid ? 'Email inválido' : '',
                    password: valueLoginError.passwordInvalid ? 'Senha inválida' : '',
                    message: valueLoginError.message ? valueLoginError.message : '',
                })
            }
        } catch (e) {
            setErrors({ email: '', password: '', message: 'Tente novamente' })
        }
    }

    public logout(): void {
        this.loginUser.logout();
    }

    public emailTextHandler(event: any, setEmail: React.Dispatch<React.SetStateAction<string>>) {
        setEmail(event.target.value);
    }

    public passwordTextHandler(event: any, setPassword: React.Dispatch<React.SetStateAction<string>>) {
        setPassword(event.target.value);
    }
}