import React, { Component } from "react";
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
import { LoginContext } from "./LoginContext";
import firebase from "./firebase";
class ContributeForm extends Component {
  static contextType = LoginContext;
  state = {
    value: "",
    loading: false,
    errorMessage: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    this.setState({ loading: true, errorMessage: "" });
    const userRef = firebase.firestore().collection("UserDetails");
    const { userName, userPAddress } = this.context;
    try {
      if (userName === "" || userName === "undefined") {
        throw new Error(
          "You are not logged in. Login or Signup to contribute in a campaign"
        );
      }
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, "ether"),
      });

      userRef.doc(userPAddress).update({
        backed: firebase.firestore.FieldValue.arrayUnion(this.props.address),
      });

      Router.replaceRoute(`/campaigns/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false, value: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={(event) => this.setState({ value: event.target.value })}
            label="ether"
            labelPosition="right"
          />
        </Form.Field>
        <Message error header="Oops!" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Contribute!
        </Button>
      </Form>
    );
  }
}

export default ContributeForm;
