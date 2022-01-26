import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

interface PropsTextFieldLogin {
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined,
  name: string;
  textError: string;
}

const TextFieldComponent = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#EBEDF5',
    },
    '& label': {
      color: '#EBEDF5',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#EBEDF5',
    },
    '& .MuiOutlinedInput-root': {
      color: "#EBEDF5",
      '& fieldset': {
        borderColor: '#EBEDF5',
      },
      '&:hover fieldset': {
        borderColor: '#FF4516',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#EBEDF5',
      },
    },
  },
})(TextField);

export const InputLogin = (props: PropsTextFieldLogin) => {
  return (
    <TextFieldComponent
      onChange={props.onChange}
      error={props.textError !== ''}
      helperText={props.textError !== '' ? props.textError : ''}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={props.name.toLowerCase()}
      label={props.name}
      name={props.name.toLowerCase()}
      type={props.name.toLowerCase() == 'email' ? '' : 'password'}
      autoComplete={props.name.toLowerCase() == 'email' ? 'email' : 'current-password'}
      autoFocus
    />
  )
}