import React, { Component } from "react";
import {
  Form,
  Button,
  Input,
  Message,
  Segment,
  Dropdown,
} from "semantic-ui-react";
import factory from "../ethereum/factory";
import web3 from "../ethereum/web3";
import { Router } from "../routes";
import Layout from "../components/Layout";
import { COUNTRY_OPTIONS } from "../components/country";

class CampaignNew extends Component {
  state = {
    name: "",
    desc: "",
    minimumContribution: "",
    totalDonation: "",
    errorMessage: "",
    loading: false,
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods
        .createCampaign(
          this.state.name,
          this.state.desc,
          this.state.minimumContribution,
          web3.utils.toWei(this.state.totalDonation, "ether")
        )
        .send({
          from: accounts[0],
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
              <label>Location</label>
              <Dropdown
                placeholder="Select Country"
                fluid
                search
                selection
                options={COUNTRY_OPTIONS}
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
