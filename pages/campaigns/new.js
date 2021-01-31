import React, { Component } from "react";
import { Form, Button, Input, Message, Segment } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import { Router } from "../../routes";
import Layout from "../../components/Layout";
import firebase from "../../components/firebase";

class CampaignNew extends Component {
  state = {
    name: "",
    desc: "",
    minimumContribution: "",
    totalDonation: "",
    errorMessage: "",
    loading: false,
    country: "",
  };

  onSubmit = async (event) => {
    event.preventDefault();
    const ref = firebase.firestore().collection("CampaignDetail");
    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });
      const campaigns = await factory.methods.getDeployedCampaigns().call();
      const id = campaigns[0];
      ref
        .doc(id[id.length - 1])
        .set({
          ID: id[id.length - 1],
          Name: this.state.name,
          Description: this.state.desc,
          Goal: this.state.totalDonation,
          Minimum: this.state.minimumContribution,
          isClosed: false,
        })
        .catch((err) => {
          console.error(err);
        });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <Segment>
          <h3>Create a Campaign</h3>
          <h4>Enter Details</h4>

          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label>Name</label>
              <Input
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <Form.TextArea
                value={this.state.desc}
                onChange={(event) =>
                  this.setState({ desc: event.target.value })
                }
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
      </Layout>
    );
  }
}

export default CampaignNew;
