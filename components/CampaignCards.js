import React, { Component } from "react";
import { Card } from "semantic-ui-react";
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
              header: doc.data().Name,
              description: (
                <div
                  style={{ fontsize: "18px", width: "220px", height: "50px" }}
                >
                  <div style={{ position: "absolute", bottom: "10px" }}>
                    <Link route={`/campaigns/${doc.id}`}>
                      <a>View Campaign</a>
                    </Link>
                  </div>
                </div>
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
