import { GridMain, GridImage, GridSection, SectionForm, FormLogin, } from './styles';
import { Box, Typography } from '@mui/material';
import { Copyright } from '../../shared/components/Copyright';
import { InputLogin } from './components/InputLogin';
import { ButtonLogin } from './components/ButtonLogin';
import { LogoVolana } from '../../shared/components/LogoVolana';
import { LoginStore } from './store/LoginStore';
import { observer } from 'mobx-react';

interface LoginProps {
    store: LoginStore;
}

export const Login = observer(({ store }: LoginProps) => (
    <GridMain container>
        <GridImage item xs={false} sm={4} md={8} />
        <GridSection item xs={12} sm={8} md={4}>
            <SectionForm>
                <LogoVolana
                    width={80}
                    height={80}
                />

                <Typography component="h1" variant="h5" color={'#EBEDF5'} >
                    Volana Guild
                </Typography>

                <FormLogin noValidate>
                    <InputLogin
                        name="Email"
                        textError={store.getErrors.email}
                        onChange={(e) => store.emailTextHandler(e.target.value)}
                    />

                    <InputLogin
                        name="Password"
                        textError={store.getErrors.password}
                        onChange={(e) => store.passwordTextHandler(e.target.value)}
                    />

                    <Box mt={1}>
                        <Typography align="center">
                            {<p style={{ color: 'red' }}>
                                {store.getErrors.message !== '' && store.getErrors.password === '' && store.getErrors.email === '' ? store.getErrors.message : ''}
                            </p>}
                        </Typography>
                    </Box>

                    <ButtonLogin
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                            e.preventDefault();
                            store.login(store.getEmail, store.getPassword);
                        }}
                    />

                    <Box mt={2}>
                        <Copyright />
                    </Box>
                </FormLogin>
            </SectionForm>
        </GridSection>
    </GridMain>
))