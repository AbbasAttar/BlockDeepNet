import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card, Segment } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const address = this.props.campaigns[0];
    const name = this.props.campaigns[1];
    const desc = this.props.campaigns[2];
    const items = [];

    for (var i = 0; i < this.props.campaigns[0].length; i++) {
      items.push({
        header: name[i],
        description: (
          <div style={{ fontsize: "18px", width: "220px", height: "50px" }}>
            <div style={{ position: "absolute", bottom: "10px" }}>
              <Link route={`/campaigns/${address[i]}`}>
                <a>View Campaign</a>
              </Link>
            </div>
          </div>
        ),
        meta: (
          <div>
            <i>{desc[i]}</i>
          </div>
        ),
        fluid: false,
      });
    }

    return (
      <Card.Group
        items={items}
        style={{ paddingLeft: "10%", marginLeft: "6px" }}
      />
    );
  }

  render() {
    return (
      <Layout>
        <Segment>
          <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
            Latest Projects
          </h2>
          {this.renderCampaigns()}
        </Segment>
      </Layout>
    );
  }
}

export default CampaignIndex;
