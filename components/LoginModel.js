import React, { useState, useContext } from "react";
import firebase from "../components/firebase";
import {
  Header,
  Button,
  Modal,
  Form,
  Grid,
  Message,
  Segment,
} from "semantic-ui-react";
import { LoginContext } from "./LoginContext";

const LoginModel = () => {
  const [open, setOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [Error, setError] = useState("none");
  const [eError, seteError] = useState("none");

  const { setUserName, setUserPAddress } = useContext(LoginContext);

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
            setUserName(items[0].name);
            setUserPAddress(items[0].pAddress);
            setOpen(false);
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
    <Modal
      closeIcon
      open={open}
      trigger={
        <Button style={{ backgroundColor: "transparent" }}>Login</Button>
      }
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header as="h2" textAlign="center">
        Log-in to your account
      </Header>
      <Modal.Content>
        <Segment raised>
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
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
                    primary
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
            </Grid.Column>
          </Grid>
        </Segment>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModel;
