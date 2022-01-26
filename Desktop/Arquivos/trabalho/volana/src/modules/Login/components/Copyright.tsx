import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#EBEDF5' }}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.volanaguild.com.br/">
                Volana Guild
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}