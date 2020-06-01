import React, { Component } from 'react';
import { Avatar, CssBaseline, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography  } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Field, reduxForm, SubmissionError } from "redux-form";
import { email, required } from 'redux-form-validators';


// import { Field, reduxForm, SubmissionError } from 'redux-form';
// import { email, required } from 'redux-form-validators';

// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const Copyright = () => {
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

// const onSubmit = async(formValues, dispatch) => {
//   console.log("SUBMIT GOT HIT BRO")
//   // try {
//   //   const { data } = await axios.post('/api/auth/signin', formValues);
//   //   console.log(data)
//   //   localStorage.setItem('token', data.token);
//   //   dispatch({ type: AUTH_USER, payload: data.token});
//   //   this.props.history.push('/counter');
//   // } catch (e) {
//   //   throw new SubmissionError({
//   //     email: 'Wrong Email',
//   //     password: 'Wrong Password',
//   //     _error: 'SignIn Failed'
//   //   });
//   // }
// }

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/featured/?basketball,NBA)',
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
    margin: theme.spacing(4, 0, 2),
  },
}));

// eslint-disable-next-line react-hooks/rules-of-hooks
  const fuckingWork = () => {
    const classes = useStyles();
  };

export default {fuckingWork, Copyright}
// export default function SignInSide(props) {
//   const classes = useStyles();

  // return (
  //   <Grid container component="main" className={classes.root}>
  //     <CssBaseline />
  //     <Grid item xs={false} sm={4} md={7} className={classes.image} />
  //     <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  //       <div className={classes.paper}>
  //         <Avatar className={classes.avatar}>
  //           {/* <LockOutlinedIcon /> */}
  //         </Avatar>
  //         <Typography component="h1" variant="h5">
  //           Sign in
  //         </Typography>
  //         <form className={classes.form} onSubmit={props.handleSubmit(props.onSubmit)} >
	// 				<Field
	// 				name = 'email'
	// 				component={props.renderEmail}
	// 				validate={
	// 					[
	// 						required({msg: 'Email is Required.'}),
	// 						email({msg: 'You must provide a valid email address'})
	// 					]
	// 				}/>
	// 				<Field
	// 					name = 'password'
	// 					component={props.renderPassword}
	// 					validate={
	// 						[
	// 							required({msg: 'Password is Required.'}),
	// 						]
	// 					}
	// 				/>
  //           <FormControlLabel
  //             control={<Checkbox value="remember" color="primary" />}
  //             label="Remember me"
  //           />
  //             <Button
  //             type="submit"
  //             fullWidth
  //             variant="contained"
  //             color="primary"
  //             className={classes.submit}
  //             // onSubmit={ () => props.onSubmit()}
  //           >
  //             Sign In
  //           </Button>
  //           <Grid container>
  //             <Grid item xs>
  //             </Grid>
  //             <Grid item>
  //               <Link href="/signup" variant="body2">
  //                 {"Don't have an account? Sign Up"}
  //               </Link>
  //             </Grid>
  //           </Grid>
  //           <Box mt={5}>
  //             <Copyright />
  //           </Box>
  //         </form>
  //       </div>
  //     </Grid>
  //   </Grid>
  // );
// }

// // import React from 'react';
// import { Avatar, CssBaseline, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography  } from '@material-ui/core/';
// // // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/featured/?basketball?nba)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignInSide() {
//   const classes = useStyles();
//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             {/* <LockOutlinedIcon /> */}
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//           <Field
//             name='email'
//             component={this.renderEmail}
//             validate={
//               [
//                 required({ msg: 'Email is required' }),
//                 email({ msg: 'You must provide a valid email address' })
//               ]
//             }
//           />
//           <Field
//               name='password'
//               component={this.renderPassword}
//               validate={
//                 [
//                   required({ msg: 'You must provide a password' })
//                 ]
//               }
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }

// class SignIn extends Component {
//   // When the user submits the form, send the formValues to /api/auth/signin
//   onSubmit = async (formValues, dispatch) => {
//     try {
//       const { data } = await axios.post('/api/auth/signin', formValues);
//       localStorage.setItem('token', data.token);
//       dispatch({ type: AUTH_USER, payload: data.token });
//       this.props.history.push('/counter');
//     } catch (e) {
//       throw new SubmissionError({
//         email: 'Wrong email',
//         password: 'Wrong password',
//         _error: 'Signin failed!'
//       });
//     }
//   }
//   // set the token coming from data into localStorage under the key 'token'
//   // Dispatch the action to the reducer to set the token as the state for authentication
//   // Redirect the user to the '/counter' route
//   renderEmail = ({ input, meta }) => {
//     return (
//       <Form.Input
//         {...input}
//         fluid
//         error={ meta.touched && meta.error }
//         icon='user'
//         iconPosition='left'
//         autoComplete='off'
//         placeholder='Email address'
//       />
//     )
//   }
//   renderPassword = ({ input, meta }) => {
//     return (
//       <Form.Input
//         {...input}
//         type='password'
//         fluid
//         error={ meta.touched && meta.error }
//         icon='lock'
//         iconPosition='left'
//         autoComplete='off'
//         placeholder='password'
//       />
//     )
//   }
//   render() {
//     const { handleSubmit, invalid, submitting, submitFailed } = this.props;
//     return (
//       <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
//         <Segment stacked>
//           <Field
//             name='email'
//             component={this.renderEmail}
//             validate={
//               [
//                 required({ msg: 'Email is required' }),
//                 email({ msg: 'You must provide a valid email address' })
//               ]
//             }
//           />
//           <Field
//             name='password'
//             component={this.renderPassword}
//             validate={
//               [
//                 required({ msg: 'You must provide a password' })
//               ]
//             }
//           />
//           <Button
//             content='Sign In'
//             color='teal'
//             fluid
//             size='large'
//             type='submit'
//             disabled={ invalid || submitting || submitFailed }
//           />
//         </Segment>
//       </Form>
//     )
//   }
// }

// export default reduxForm({ form: 'SignIn '})(SignIn);

// import React from 'react';
// import { Avatar, CssBaseline, Button, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography  } from '@material-ui/core/';
// // // import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import { makeStyles } from '@material-ui/core/styles';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   root: {
//     height: '100vh',
//   },
//   image: {
//     backgroundImage: 'url(https://source.unsplash.com/featured/?basketball?nba)',
//     backgroundRepeat: 'no-repeat',
//     backgroundColor:
//       theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignInSide() {
//   const classes = useStyles();

//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             {/* <LockOutlinedIcon /> */}
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <form className={classes.form} noValidate>
//           <Field
//             name='email'
//             component={this.renderEmail}
//             validate={
//               [
//                 required({ msg: 'Email is required' }),
//                 email({ msg: 'You must provide a valid email address' })
//               ]
//             }
//           />
//           <Field
//               name='password'
//               component={this.renderPassword}
//               validate={
//                 [
//                   required({ msg: 'You must provide a password' })
//                 ]
//               }
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//             <Box mt={5}>
//               <Copyright />
//             </Box>
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }