import React, { Component } from "react";
import factory from "../ethereum/factory";
import { Card } from "semantic-ui-react";
import Layout from "../components/Layout";
import { Link } from "../routes";
import web3 from "../ethereum/web3";
import ContributeForm from "../components/ContributeForm";

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {

    const address = this.props.campaigns[0];
    const name = this.props.campaigns[1];
    const desc = this.props.campaigns[2];
    const donation = this.props.campaigns[3];
    const minimum = this.props.campaigns[4];
    const items = [];
    console.log(address, name, desc, minimum, donation);

    for(var i = 0; i< this.props.campaigns[0].length; i++){
      items.push({
        header: name[i],
        description: (
          <div>
            <div style={{fontsize : "18px"}}>
              <h5>
                <br/>
              <div>Address: {address[i]}</div>
              <div>Minimum: {minimum[i]} wei</div>
              <div>Required Donation: {web3.utils.fromWei(donation[i],"ether")} ether</div>
              </h5>
            </div>
            <div>
              <br/>
              <ContributeForm address={address[i]} /><br/>
              <Link route={`/campaigns/${address[i]}`}>
                <a>View Campaign</a>
              </Link>
            </div>
          </div>
        ),
        meta: (<div><i>{desc[i]}</i></div>),
        fluid: true,
        },
      );
    }

    // const items = address.map((item) => {
    //   return {
    //     header: item,
    //     description: (
    //         <Link route={`/campaigns/${item}`}>
    //           <a>View Campaign</a>
    //         </Link>
    //     ),
    //     fluid: true,
    //   };
    // });

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h2>Projects</h2>
          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;