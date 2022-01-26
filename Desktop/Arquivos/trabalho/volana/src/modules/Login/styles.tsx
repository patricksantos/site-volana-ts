import { makeStyles } from '@material-ui/styles';
import imageBackground from '../../shared/assets/images/background_login_mapa.png';

const loginStyles = makeStyles({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: `url(${imageBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#28272d',
        //     theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    colorDetails: {
        color: '#2a4159',
    },
    section: {
        backgroundColor: '#28272d',
        color: '#28272d',
    },
    paper: {
        margin: '50px 25px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        // margin: '10px',
        // backgroundColor: '#28272d',
        width: 120,
        height: 120,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 20,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '5px',
        color: '#f2f2f2',
    },
    submit: {
        margin: '10px',
        backgroundColor: '#EBEDF5',
        color: '#28272d',
        '&:hover': {
            backgroundColor: '#FF4516',
            color: '#f2f2f2',
        },
    },
});

export default loginStyles;