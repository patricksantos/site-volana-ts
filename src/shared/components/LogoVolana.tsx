import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Avatar } from '@mui/material';
import imageLogo from '../assets/images/logo2.png';

interface PropsLogoVolana {
    width: number;
    height: number;
}

export const LogoComponent = withStyles({
    root: {
        width: '120px',
        height: '120px',
        marginLeft: '50px',
        marginRight: '50px',
        marginBottom: '10px',
    }
})(Avatar);

export const LogoVolana = (props: PropsLogoVolana) => {
    return (
        <LogoComponent
            src={imageLogo}
            variant="square"
            alt="Logo"
            style={{
                width: props.width,
                height: props.height,
            }}
        />
    )
}