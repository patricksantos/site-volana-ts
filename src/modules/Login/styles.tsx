import styled from 'styled-components';
import { Grid } from '@mui/material';
import imageBackground from '../../shared/assets/images/background_login_mapa.png';

export const GridMain = styled(Grid)`
    height: 100vh;
`;

export const GridImage = styled(Grid)`
    background-image: url(${imageBackground});
    background-repeat: no-repeat;
    background-color: #28272d;
    background-size: cover;
    background-position: center;
`;

export const GridSection = styled(Grid)`
    background-color: #28272d;
    box-shadow: 0 0 0.5em #28272d;
    margin: 50px 25px;
`;

export const SectionForm = styled.div`
    background-color: transparent;
    color: transparent;
    margin: 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormLogin = styled.form`
    width: 100%; // Fix IE 11 issue.
    margin-top: 5px;
    color: #f2f2f2;
`;
