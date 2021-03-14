import React, { useContext, useState } from "react";
import { Header, Button, Dropdown, Confirm } from "semantic-ui-react";
import { Link, Router } from "../routes";
import LoginModel from "./LoginModel";
import SignupModel from "./SignupModel";
import { LoginContext } from "./LoginContext";

const HeaderComponent = () => {
  const { userName, userPAddress, setUserName, setUserPAddress } = useContext(
    LoginContext
  );

  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        margin: "10px",
        paddingBottom: "10px",
        height: "60px",
      }}
    >
      <Header as="h1" floated="left">
        <Link route="/">
          <div className="item" style={{ cursor: "pointer" }}>
            BlockDeepNet
          </div>
        </Link>
      </Header>
      <Header as="h3" floated="right">
        <Link route="/campaigns/new">
          <Button
            content="Create Campaign"
            style={{ backgroundColor: "transparent" }}
          />
        </Link>

        {userName !== "" && userName !== "undefined" ? (
          <>
            <Dropdown text={userName} pointing style={{ fontSize: "16px" }}>
              <Dropdown.Menu>
                <Link route={`/usr/${userPAddress}/created`}>
                  <Dropdown.Item text="Created" />
                </Link>
                <Link route={`/usr/${userPAddress}/backed`}>
                  <Dropdown.Item text="Backed" />
                </Link>

                <Dropdown.Item
                  text="Logout"
                  onClick={() => {
                    setOpen(true);
                  }}
                />
                <Confirm
                  open={open}
                  onCancel={() => {
                    setOpen(false);
                  }}
                  confirmButton="Logout"
                  onConfirm={() => {
                    setOpen(false);
                    Router.pushRoute("/");
                    setUserName("");
                    setUserPAddress("");
                  }}
                />
              </Dropdown.Menu>
            </Dropdown>
          </>
        ) : (
          <>
            <LoginModel />
            <SignupModel />
          </>
        )}
      </Header>
      <br />
    </div>
  );
};

export default HeaderComponent;
