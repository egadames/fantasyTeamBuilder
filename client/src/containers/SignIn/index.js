import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";
import { Form, Segment, Button, Grid, Image } from "semantic-ui-react";
import { email, required } from "redux-form-validators";
import axios from "axios";
import { AUTH_USER } from "../../actions/types";

class SignIn extends Component {
  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post("/api/auth/signin", formValues);
      localStorage.setItem("token", data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push("/");
    } catch (e) {
      throw new SubmissionError({
        email: "Wrong Email",
        password: "Wrong Password",
        _error: "SignIn Failed",
      });
    }
  };

  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={meta.touched && meta.error}
        icon="user"
        iconPosition="left"
        autoComplete="off"
        placeholder="Email address"
      />
    );
  };

  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        type={"password"}
        fluid
        error={meta.touched && meta.error}
        icon="lock"
        iconPosition="left"
        autoComplete="off"
        placeholder="password"
      />
    );
  };

  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <div>
        <Grid verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" fluid width={8}>
              <div styles={{ maxWidth: 1400, maxHeight: 1000 }}>
                <Image src="https://source.unsplash.com/1600x1400/?basketball?nba" />
              </div>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Form
                style={{ maxWidth: 700 }}
                size={"large"}
                onSubmit={handleSubmit(this.onSubmit)}
              >
                <Segment inverted stacked>
                  <Field
                    name="email"
                    component={this.renderEmail}
                    validate={[
                      required({ msg: "Email is Required." }),
                      email({ msg: "You must provide a valid email address" }),
                    ]}
                  />
                  <Field
                    name="password"
                    component={this.renderPassword}
                    validate={[required({ msg: "Password is Required." })]}
                  />
                  <Button
                    content={"Sign In"}
                    color={"blue"}
                    fluid
                    size={"large"}
                    disabled={invalid || submitting || submitFailed}
                  />
                </Segment>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default reduxForm({ form: "SignIn" })(SignIn);
