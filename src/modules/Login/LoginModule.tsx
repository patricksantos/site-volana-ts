import { LoginRepository } from '../../repository/login-repository';
import Login from './Login';
import { LoginStore } from './store/login-store';

export const LoginModule = () => {
    const loginRepository = new LoginRepository();
    const loginStore = new LoginStore(loginRepository);

    return <Login loginStore={loginStore} />;
}