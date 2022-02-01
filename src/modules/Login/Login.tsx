import React, { useState } from 'react';
import { GridMain, GridImage, GridSection, SectionForm, FormLogin, } from './styles';
import { Box, Typography } from '@mui/material';
import { Copyright } from '../../shared/components/Copyright';
import { InputLogin } from './components/InputLogin';
import { LoginStore } from './store/login-store';
import { ButtonLogin } from './components/ButtonLogin';
import { LogoVolana } from '../../shared/components/LogoVolana';

interface LoginProps {
    store: LoginStore;
}

export const Login = ({ store }: LoginProps) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        message: "",
    });

    return (
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
                            textError={errors.email}
                            onChange={(e) => store.emailTextHandler(e, setEmail)}
                        />

                        <InputLogin
                            name="Password"
                            textError={errors.password}
                            onChange={(e) => store.passwordTextHandler(e, setPassword)}
                        />

                        <Box mt={1}>
                            <Typography align="center">
                                {<p style={{ color: 'red' }}>
                                    {errors.message !== '' && errors.password === '' && errors.email === '' ? errors.message : ''}
                                </p>}
                            </Typography>
                        </Box>

                        <ButtonLogin
                            onClick={(e) => store.login(e, email, password, setErrors)}
                        />

                        <Box mt={2}>
                            <Copyright />
                        </Box>
                    </FormLogin>
                </SectionForm>
            </GridSection>
        </GridMain>
    )
}