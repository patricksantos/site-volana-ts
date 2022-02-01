import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';

interface PropsTextFieldLogin {
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

export const ButtonComponent = withStyles({
    root: {
        // margin: '10px',
        backgroundColor: '#EBEDF5',
        color: '#28272d',
        '&:hover': {
            backgroundColor: '#FF4516',
            color: '#f2f2f2',
        },
    }
})(Button);

export const ButtonLogin = (props: PropsTextFieldLogin) => {
    return (
        <ButtonComponent
            onClick={props.onClick}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
        >
            Entrar
        </ButtonComponent>
    )
}