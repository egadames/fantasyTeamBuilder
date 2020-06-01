import React, {Component} from "react";
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import {AUTH_USER, AUTH_USER_ERROR} from "../../actions/types";

class SignIn extends Component {

	onSubmit = async(formValues, dispatch) => {
		try {
			const { data } = await axios.post('/api/auth/signin', formValues);
			console.log(data)
			localStorage.setItem('token', data.token);
			dispatch({ type: AUTH_USER, payload: data.token});
			this.props.history.push('/counter');
		} catch (e) {
			throw new SubmissionError({
				email: 'Wrong Email',
				password: 'Wrong Password',
				_error: 'SignIn Failed'
			});
		}
	}

	renderEmail = ({ input, meta}) => {
		return (
			<Form.Input
				{...input}
				fluid
				error={meta.touched && meta.error}
				icon='user'
				iconPosition='left'
				autoComplete='off'
				placeholder='Email address'
			/>
		)
	}

	renderPassword = ({ input, meta}) => {
		return (
			<Form.Input
				{...input}
				type={'password'}
				fluid
				error={meta.touched && meta.error}
				icon='lock'
				iconPosition='left'
				autoComplete='off'
				placeholder='password'
			/>
		)
	}

	render() {
		const { handleSubmit, invalid, submitting, submitFailed } = this.props;
		return(
			<Form size={'large'} onSubmit={handleSubmit(this.onSubmit)}>
				<Segment stacked>
					<Field
					name = 'email'
					component={this.renderEmail}
					validate={
						[
							required({msg: 'Email is Required.'}),
							email({msg: 'You must provide a valid email address'})
						]
					}/>
					<Field
						name = 'password'
						component={this.renderPassword}
						validate={
							[
								required({msg: 'Password is Required.'}),
							]
						}
					/>
					<Button
					content={'Sign In'}
					color={'teal'}
					fluid
					size={'large'}
					/>
				</Segment>
			</Form>
		)
	}
}

export default reduxForm({ form: 'SignIn'})(SignIn);



// import React, { Component } from "react";
// import { Field, reduxForm, SubmissionError } from "redux-form";
// import { Form } from 'semantic-ui-react';
// // import { Form, Segment, Button } from 'semantic-ui-react';
// import {
//   Avatar,
//   CssBaseline,
//   Button,
//   TextField,
//   FormControlLabel,
//   Checkbox,
//   Link,
//   Paper,
//   Box,
//   Grid,
// 	Typography,
// 	Input,
// } from "@material-ui/core/";
// import { email, required } from "redux-form-validators";
// import axios from "axios";
// import { AUTH_USER, AUTH_USER_ERROR } from "../../actions/types";
// // import Test from './test'
// import { makeStyles } from '@material-ui/core/styles';
// import SimpleReactValidator from 'simple-react-validator';

// // constructor() {
// //   this.validator = new SimpleReactValidator();
// // }

// 	const onSubmit = (name, email) => async(event, dispatch) => {
//     console.log('submit')
//     console.log(name)
// 		console.log(email)
// 		console.log(event)
// 		console.log(dispatch)
// 		event.preventDefault()

// 		try {
// 			const { data } = await axios.post('/api/auth/signin', {name, email});
// 			console.log(data)
// 			localStorage.setItem('token', data.token);
// 			dispatch({ type: AUTH_USER, payload: data.token});
// 			this.props.history.push('/');
// 		} catch (e) {
// 			throw new SubmissionError({
// 				email: 'Wrong Email',
// 				password: 'Wrong Password',
// 				_error: 'SignIn Failed'
// 			});
// 		}
// 	}

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
// 	const classes = useStyles();
// 	const [name, setName] = React.useState();

// 	const handleChange = (event) => {
// 		event.preventDefault()
// 			console.log(event.target.value)
// 			setName(event.target.value);
// 		};

// 	const [email, setEmail] = React.useState();

// 	const handleChange2 = (event) => {
// 		event.preventDefault()

// 			console.log(event.target.value)
// 			setEmail(event.target.value);
// 		};

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
//           <form className={classes.form} onSubmit = {() => onSubmit(name, email)}
// >
//             <TextField
//               variant="outlined"
//               margin="normal"
// 							required
// 							value={email} 
// 							onChange={handleChange2}
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
// 							autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
// 							fullWidth
// 							value={name} 
// 							onChange={handleChange}
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
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
// 							className={classes.submit}
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

// 	onSubmit = async(formValues, dispatch) => {
//     console.log('submit')
    // console.log(formValues)
    // console.log(dispatch)
		// try {
		// 	const { data } = await axios.post('/api/auth/signin', formValues);
		// 	console.log(data)
		// 	// localStorage.setItem('token', data.token);
		// 	// dispatch({ type: AUTH_USER, payload: data.token});
		// 	// this.props.history.push('/');
		// } catch (e) {
		// 	throw new SubmissionError({
		// 		email: 'Wrong Email',
		// 		password: 'Wrong Password',
		// 		_error: 'SignIn Failed'
		// 	});
		// }
	// }

	// renderEmail = ({ input, meta}) => {
	// 	return (
  //     <Form.Input
  //     {...input}
  //     variant="outlined"
  //     margin="normal"
  //     // required
  //     fluid
  //     error={meta.touched && meta.error}
  //     autoComplete='off'
  //     autoFocus
  //   />
			// <Form.Input
			// 	{...input}
			// 	fluid
			// 	error={meta.touched && meta.error}
			// 	icon='user'
			// 	iconPosition='left'
			// 	autoComplete='off'
			// 	placeholder='Email address'
			// />
	// 	)
	// }

	// renderPassword = ({ input, meta}) => {
  // console.log(meta)
	// 	return (
  //     <Form.Input
  //     {...input}
  //     variant="outlined"
  //     margin="normal"
  //     fluid
  //     error={meta.touched && meta.error}
  //     type="password"
  //     autoComplete='off'
  //   />
			// <Form.Input
			// 	{...input}
			// 	type={'password'}
			// 	fluid
			// 	error={meta.touched && meta.error}
			// 	icon='lock'
			// 	iconPosition='left'
			// 	autoComplete='off'
			// 	placeholder='password'
			// />
	// 	)
	// }

	// render() {
  //   const { handleSubmit, invalid, submitting, submitFailed } = this.props;
	// 	console.log(this.props)
	// 	console.log(Test)
	// 	return("holla")
			// 	<Grid container component="main" className={classes.root}>
			// 		<CssBaseline />
			// 		<Grid item xs={false} sm={4} md={7} className={classes.image} />
			// 		<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
			// 			<div className={classes.paper}>
			// 				<Avatar className={classes.avatar}>
			// 					{/* <LockOutlinedIcon /> */}
			// 				</Avatar>
			// 				<Typography component="h1" variant="h5">
			// 					Sign in
			// 				</Typography>
			// 				<form className={classes.form} onSubmit={handleSubmit(this.onSubmit)} >
			// 				<Field
			// 				name = 'email'
			// 				component={this.renderEmail}
			// 				validate={
			// 					[
			// 						required({msg: 'Email is Required.'}),
			// 						email({msg: 'You must provide a valid email address'})
			// 					]
			// 				}/>
			// 				<Field
			// 					name = 'password'
			// 					component={this.renderPassword}
			// 					validate={
			// 						[
			// 							required({msg: 'Password is Required.'}),
			// 						]
			// 					}
			// 				/>
			// 					<FormControlLabel
			// 						control={<Checkbox value="remember" color="primary" />}
			// 						label="Remember me"
			// 					/>
			// 						<Button
			// 						type="submit"
			// 						fullWidth
			// 						variant="contained"
			// 						color="primary"
			// 						className={classes.submit}
			// 						// onSubmit={ () => props.onSubmit()}
			// 					>
			// 						Sign In
			// 					</Button>
			// 					<Grid container>
			// 						<Grid item xs>
			// 						</Grid>
			// 						<Grid item>
			// 							<Link href="/signup" variant="body2">
			// 								{"Don't have an account? Sign Up"}
			// 							</Link>
			// 						</Grid>
			// 					</Grid>
			// 					<Box mt={5}>
			// 						<Copyright />
			// 					</Box>
			// 				</form>
			// 			</div>
			// 		</Grid>
			// 	</Grid>
			// );
			// <Form size={'large'} onSubmit={handleSubmit(this.onSubmit)}>
        // <Test
        // renderEmail = {this.renderEmail}
				// renderPassword = {this.renderPassword}
				// handleSubmit = {handleSubmit}
				// onSubmit = {this.onSubmit}
        // />
			// </Form>	
// 	}
// }

// export default reduxForm({ form: 'SignIn'})(SignIn);

			// 	{/* <Segment stacked> */}
			// 		{/* <Field
			// 		name = 'email'
			// 		component={this.renderEmail}
			// 		validate={
			// 			[
			// 				required({msg: 'Email is Required.'}),
			// 				email({msg: 'You must provide a valid email address'})
			// 			]
			// 		}/>
			// 		<Field
			// 			name = 'password'
			// 			component={this.renderPassword}
			// 			validate={
			// 				[
			// 					required({msg: 'Password is Required.'}),
			// 				]
			// 			}
			// 		/>
			// 		<Button
			// 		content={'Sign In'}
			// 		color={'teal'}
			// 		fluid
			// 		size={'large'}
			// 		/> */}
			// 	{/* </Segment> */}
			// // </Form>

// const renderEmail = ({ input, meta }) => {
//   return (
//     <TextField
//       {...input}
//       variant="outlined"
//       margin="normal"
//       required
//       fullWidth
//       error={ meta.touched && meta.error }
//       id="email"
//       label="Email Address"
//       name="email"
//       autoComplete="email"
//       autoFocus
//     />
//   )
// }

// const renderPassword = ({ input, meta }) => {
//   return (
//     <TextField
//     {...input}
//     variant="outlined"
//     margin="normal"
//     error={ meta.touched && meta.error }
//     required
//     fullWidth
//     name="password"
//     label="Password"
//     type="password"
//     id="password"
//     autoComplete="current-password"
//   />
//   )
// }


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
//     backgroundImage: 'url(https://source.unsplash.com/random)',
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

//  const SignInSide = () => {
//   const classes = useStyles();
//   const { handleSubmit, invalid, submitting, submitFailed } = this.props;

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
//               name='email'
//               component={renderEmail}
//               validate={
//                 [
//                   required({ msg: 'Email is required' }),
//                   email({ msg: 'You must provide a valid email address' })
//                 ]
//               }
//             />
//             <Field
//                 name='password'
//                 component={renderPassword}
//                 validate={
//                   [
//                     required({ msg: 'You must provide a password' })
//                   ]
//                 }
//               />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="primary"
//               onClick={handleSubmit(this.onSubmit)}
//               disabled={ invalid || submitting || submitFailed }
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

// export default reduxForm({ form: 'SignIn '})(SignInSide); 


