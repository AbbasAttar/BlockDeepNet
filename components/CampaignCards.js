import React, { Component } from "react";
import { Button, Card } from "semantic-ui-react";
import firebase from "./firebase";
import { Link } from "../routes";

export default class CampaignCards extends Component {
  state = {
    campaigns: [],
    items: [],
  };

  setItems() {
    const details = firebase.firestore().collection("CampaignDetail");
    details.get().then((data) => {
      data.forEach((doc) => {
        if (!this.state.campaigns.includes(doc.id)) {
          this.setState({
            campaigns: this.state.campaigns.concat(doc.id),
          });
          this.setState({
            items: this.state.items.concat({
              image: doc.data().url,
              header: doc.data().Name,
              extra: (
                <Link route={`/campaigns/${doc.id}`}>
                  <a>
                    <Button primary>View Campaign</Button>
                  </a>
                </Link>
              ),
              meta: (
                <div>
                  <i>{doc.data().Description}</i>
                </div>
              ),
              fluid: false,
            }),
          });
        }
      });
    });
  }

  render() {
    this.setItems();
    return (
      <Card.Group
        items={this.state.items}
        itemsPerRow={3}
        style={{ margin: "0px auto" }}
      />
    );
  }
}
