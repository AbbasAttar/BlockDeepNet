import React, { Component } from "react";
import { Form, Button, Input, Message, Segment } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import firebase from "../../components/firebase";
import { LoginContext } from "../../components/LoginContext";

class CampaignNew extends Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      minimumContribution: "",
      totalDonation: "",
      image: null,
      errorMessage: "",
      loading: false,
      url: "",
      extension: "",
    };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const ref = firebase.firestore().collection("CampaignDetail");
    const userRef = firebase.firestore().collection("UserDetails");
    const { userName, userPAddress } = this.context;
    this.setState({ loading: true });
    try {
      if (userName === "" || userName === "undefined") {
        throw new Error(
          "You are not logged in. Login or Signup to create a campaign"
        );
      }
      const accounts = await web3.eth.getAccounts();
      if (accounts[0] !== userPAddress) {
        throw new Error("Login with provided Ethereum public address");
      }
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: userPAddress,
        });
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      const allId = campaigns[0];
      const id = allId[allId.length - 1];

      const fileName = this.state.image.name;
      const regex = new RegExp("[^.]+$");
      const extension = fileName.match(regex);
      this.setState({ extension: extension[0] });
      const imageRef = firebase
        .storage()
        .ref(`images/${id}.${this.state.extension}`);
      await imageRef.put(this.state.image);
      const imageURL = await imageRef.getDownloadURL();
      this.setState({ url: imageURL });
      ref
        .doc(id)
        .set({
          ID: id,
          Name: this.state.name,
          Description: this.state.desc,
          Goal: this.state.totalDonation,
          Minimum: this.state.minimumContribution,
          isClosed: false,
          url: this.state.url,
        })
        .catch((err) => {
          console.error(err);
        });

      userRef.doc(userPAddress).update({
        created: firebase.firestore.FieldValue.arrayUnion(id),
      });

      Router.pushRoute("/");
    } catch (err) {
      console.log(err.message);
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Segment>
        <h3>Create a Campaign</h3>
        <h4>Enter Details</h4>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Name</label>
            <Input
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <Form.TextArea
              value={this.state.desc}
              onChange={(event) => this.setState({ desc: event.target.value })}
            />
          </Form.Field>

          <Form.Field>
            <label>Cover Images</label>
            <input
              type="file"
              onChange={(e) => {
                this.setState({ image: e.target.files[0] }, () => {});
              }}
            />
          </Form.Field>

          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(event) =>
                this.setState({ minimumContribution: event.target.value })
              }
            />
          </Form.Field>

          <Form.Field>
            <label>Total Donation</label>
            <Input
              label="ether"
              labelPosition="right"
              value={this.state.totalDonation}
              onChange={(event) =>
                this.setState({ totalDonation: event.target.value })
              }
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default CampaignNew;
