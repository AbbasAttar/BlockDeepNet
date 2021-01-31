import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";
import Layout from "../components/Layout";
import firebase from "../components/firebase";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Router } from "../routes";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [pAddress, setpAddress] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [Error, setError] = useState("none");

  const ref = firebase.firestore().collection("UserDetails");

  function addData(newData) {
    ref
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
    Router.pushRoute("/");
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
              Signup
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Full Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />

                <Form.Input
                  fluid
                  icon="bold icon"
                  iconPosition="left"
                  placeholder="Blockchain Public Address"
                  onChange={(e) => setpAddress(e.target.value)}
                  value={pAddress}
                  required
                />

                <Form.Input
                  fluid
                  icon="location arrow"
                  iconPosition="left"
                  placeholder="Location"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                  required
                />

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

                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Confirm Password"
                  type="password"
                  onChange={(e) => setcPassword(e.target.value)}
                  value={cpassword}
                  required
                />

                <Button
                  type="submit"
                  color="teal"
                  fluid
                  size="large"
                  onClick={() => {
                    if (cpassword === password) {
                      setError("none");
                      addData({
                        name,
                        pAddress,
                        location,
                        email,
                        password,
                        id: uuidv4(),
                      });
                    } else {
                      setError("block");
                      setPassword("");
                      setcPassword("");
                    }
                  }}
                >
                  Sign Up
                </Button>
              </Segment>
            </Form>

            <Grid.Row style={{ display: Error }}>
              <Message floating error header="Re-enter password" />
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Segment>
    </Layout>
  );
};

export default SignupForm;
