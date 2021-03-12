import React, { useState, useContext } from "react";
import {
  Header,
  Button,
  Modal,
  Form,
  Grid,
  Message,
  Segment,
} from "semantic-ui-react";
import firebase from "../components/firebase";
import { LoginContext } from "./LoginContext";
import cookies from "js-cookies";

const SignupModel = () => {
  const { setUserName, setUserPAddress } = useContext(LoginContext);
  const [sOpen, setsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pAddress, setpAddress] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [location, setLocation] = useState("");
  const [Error, setError] = useState("none");

  const ref = firebase.firestore().collection("UserDetails");

  function addData(newData) {
    ref
      .doc(newData.pAddress)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });

    setUserName(name);
    setUserPAddress(pAddress);
    cookies.setItem("name", name);
    cookies.setItem("pAddress", pAddress);
    setsOpen(false);
  }

  return (
    <Modal
      closeIcon
      open={sOpen}
      trigger={
        <Button style={{ backgroundColor: "transparent" }}>Signup</Button>
      }
      onClose={() => setsOpen(false)}
      onOpen={() => setsOpen(true)}
    >
      <Header as="h2" textAlign="center">
        Signup
      </Header>
      <Modal.Content>
        <Segment raised>
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="User Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />

                  <Form.Input
                    fluid
                    icon="bold"
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
                    primary
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
                          created: [],
                          backed: [],
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
      </Modal.Content>
    </Modal>
  );
};

export default SignupModel;
