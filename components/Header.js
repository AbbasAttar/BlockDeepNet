import React, { Component } from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "../routes";

class HeaderClass extends Component {
  render() {
    return (
      <div
        style={{
          margin: "10px",
          paddingBottom: "10px",
          height: "60px",
        }}
        clearing
      >
        <Header as="h1" floated="left">
          <Link route="/">
            <div className="item" style={{ cursor: "pointer" }}>
              BlockDeepNet
            </div>
          </Link>
        </Header>
        <Header as="h3" floated="right">
          <Link route="campaigns/new">
            <Button
              content="Create Campaign"
              style={{ backgroundColor: "transparent" }}
            />
          </Link>

          <Link route="/Login">
            <Button
              content="Login"
              style={{ backgroundColor: "transparent" }}
            />
          </Link>
          <Link route="/Signup">
            <Button
              content="Sign up"
              style={{ backgroundColor: "transparent" }}
            />
          </Link>
        </Header>
        <br />
      </div>
    );
  }
}

export default HeaderClass;
