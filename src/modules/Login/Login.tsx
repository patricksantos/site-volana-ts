import React, { useState } from 'react';
import { Avatar, Box, Button, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import imageLogo from '../../shared/assets/images/logo2.png';
import { Copyright } from '../../shared/components/Copyright';
import { InputLogin } from './components/InputLogin';
import { LoginStore } from './store/login-store';
import loginStyles from "./styles";

interface LoginProps {
    loginStore: LoginStore;
}

const Login = ({ loginStore }: LoginProps) => {
    const classes = loginStyles();
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        message: "",
    });

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={8} className={classes.image} />
            <Grid className={classes.section} item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar
                        alt="Logo"
                        src={imageLogo}
                        variant="square"
                        className={classes.avatar}
                    />
                    <Typography component="h1" variant="h5" style={{ color: '#EBEDF5' }}>
                        Volana Guild
                    </Typography>
                    <form className={classes.form} noValidate >
                        <InputLogin
                            name="Email"
                            textError={errors.email}
                            onChange={(e) => loginStore.emailTextHandler(e, setEmail)}
                        />

                        <InputLogin
                            name="Password"
                            textError={errors.password}
                            onChange={(e) => loginStore.passwordTextHandler(e, setPassword)}
                        />

                        <Box mt={1}>
                            <Typography align="center">
                                {<p style={{ color: 'red' }}>
                                    {errors.message !== '' && errors.password === '' && errors.email === '' ? errors.message : ''}
                                </p>}
                            </Typography>
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={(e) => loginStore.login(e, email, password, setErrors)}
                        >
                            Entrar
                        </Button>

                        <Box mt={2}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login;