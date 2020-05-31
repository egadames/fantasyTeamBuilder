import React from 'react';
import { Avatar, CssBaseline, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography  } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { email, required } from 'redux-form-validators';

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const renderEmail = ({ input, meta }) => {
  return (
    <TextField
      {...input}
      variant="outlined"
      margin="normal"
      required
      fullWidth
      error={ meta.touched && meta.error }
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
  )
}

const renderPassword = ({ input, meta }) => {
  return (
    <TextField
    {...input}
    variant="outlined"
    margin="normal"
    error={ meta.touched && meta.error }
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="current-password"
  />
  )
}


const onSubmit = async(formValues, dispatch) => {
  console.log("SUBMIT GOT HIT BRO")
  // try {
  //   const { data } = await axios.post('/api/auth/signin', formValues);
  //   console.log(data)
  //   localStorage.setItem('token', data.token);
  //   dispatch({ type: AUTH_USER, payload: data.token});
  //   this.props.history.push('/counter');
  // } catch (e) {
  //   throw new SubmissionError({
  //     email: 'Wrong Email',
  //     password: 'Wrong Password',
  //     _error: 'SignIn Failed'
  //   });
  // }
}
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

 const SignInSide = () => {
  const classes = useStyles();
  const { handleSubmit, invalid, submitting, submitFailed } = this.props;

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
          <Field
              name='email'
              component={renderEmail}
              validate={
                [
                  required({ msg: 'Email is required' }),
                  email({ msg: 'You must provide a valid email address' })
                ]
              }
            />
            <Field
                name='password'
                component={renderPassword}
                validate={
                  [
                    required({ msg: 'You must provide a password' })
                  ]
                }
              />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onSubmit={handleSubmit(this.onSubmit)}
              disabled={ invalid || submitting || submitFailed }
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default reduxForm({ form: 'SignIn '})(SignInSide); 


