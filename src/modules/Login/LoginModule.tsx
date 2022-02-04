import { LoginRepository } from '../../repository/login-repository';
import { Login } from './Login';
import { LoginStore } from './store/LoginStore';

export const LoginModule = () => {
    const loginRepository = new LoginRepository();
    const loginStore = new LoginStore(loginRepository);

    return <Login store={loginStore} />;
}

