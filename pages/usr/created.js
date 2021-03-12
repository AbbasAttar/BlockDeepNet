import React, { Component } from "react";
import firebase from "../../components/firebase";
import { LoginContext } from "../../components/LoginContext";
import { Link } from "../../routes";
import { Button, Card } from "semantic-ui-react";

export default class Created extends Component {
  static contextType = LoginContext;
  state = {
    campaigns: [],
    items: [],
  };

  setItems() {
    const { userPAddress } = this.context;
    const userRef = firebase.firestore().collection("UserDetails");
    const ref = firebase.firestore().collection("CampaignDetail");
    userRef
      .where("pAddress", "==", userPAddress)
      .onSnapshot((querySnapshot) => {
        const user = [];
        querySnapshot.forEach((doc) => {
          user.push(doc.data());
          if (user[0].created.length != 0) {
            for (let i = 0; i < user[0].created.length; i++) {
              ref
                .doc(user[0].created[i])
                .get()
                .then((doc) => {
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
            }
          }
        });
      });
  }

  render() {
    this.setItems();
    return (
      <>
        <h1>Your Created Campaigns</h1>
        <Card.Group
          items={this.state.items}
          itemsPerRow={3}
          style={{ margin: "0px auto" }}
        />
      </>
    );
  }
}
