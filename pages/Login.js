import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import Layout from "../components/Layout";
import firebase from "../components/firebase";
import { Router, Link } from "../routes";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("none");
  const [eError, seteError] = useState("none");
  const ref = firebase.firestore().collection("UserDetails");

  function checkUser() {
    ref.where("email", "==", email).onSnapshot((querySnapshot) => {
      if (querySnapshot.docs.length != 0) {
        seteError("none");
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
          if (items[0].password === password) {
            setError("none");
            Router.pushRoute("/");
          } else {
            setError("block");
            setPassword("");
          }
        });
      } else {
        seteError("block");
      }
    });
  }

  return (
    <Layout>
      <Segment raised>
        <Grid
          textAlign="center"
          style={{ height: "80vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="inbox"
                  iconPosition="left"
                  placeholder="E-mail address"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => {
                    checkUser();
                  }}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Grid.Row style={{ display: Error }}>
              <Message floating error header="Re-enter password" />
            </Grid.Row>
            <Grid.Row style={{ display: eError }}>
              <Message
                floating
                error
                header="E-Mail not found. Please Sign up"
              />
            </Grid.Row>
            <Message>
              New to us? <Link route="/Signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Segment>
    </Layout>
  );
};

export default LoginForm;
