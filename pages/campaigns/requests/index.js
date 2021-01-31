import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button, Segment, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

class RequestIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const campaign = Campaign(address);
    const requestCount = await campaign.methods.getRequestCount().call();
    const approversCount = await campaign.methods.backersCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.requests(index).call();
        })
    );
    console.log(requests);
    return { address, requests, requestCount, approversCount };
  }

  renderRow() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          approversCount={this.props.approversCount}
          address={this.props.address}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;
    return (
      <Layout>
        <Segment>
          <div style={{ display: "flex" }}>
            <h3 style={{ flex: "1" }}>Requests</h3>
            <Link route={`/campaigns/${this.props.address}/requests/new`}>
              <a>
                <Button primary>Add Request</Button>
              </a>
            </Link>
            <Link route={`/campaigns/${this.props.address}`}>
              <a>
                <Button>Back</Button>
              </a>
            </Link>
          </div>

          <Table>
            <Header>
              <Row>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell>Amount</HeaderCell>
                <HeaderCell>Recipient</HeaderCell>
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>Approve</HeaderCell>
                <HeaderCell>Finalize</HeaderCell>
              </Row>
            </Header>
            <Body>{this.renderRow()}</Body>
          </Table>
          <div>Found {this.props.requestCount} request</div>
        </Segment>
      </Layout>
    );
  }
}

export default RequestIndex;
