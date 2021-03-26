import React, { Component } from "react";
import firebase from "../../components/firebase";
import { LoginContext } from "../../components/LoginContext";
import { Link } from "../../routes";
import { Button, Card } from "semantic-ui-react";
import styles from "../../css_modules/page_css/usr.module.css";

export default class Backed extends Component {
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
        let campaignAddress = "";
        querySnapshot.forEach((doc) => {
          user.push(doc.data());
          if (user[0].backed.length != 0) {
            for (let i = 0; i < user[0].backed.length; i++) {
              campaignAddress = user[0].backed[i];
              ref
                .doc()
                .get(campaignAddress)
                .then((doc) => {
                  if (doc.data() !== undefined) {
                    if (!this.state.campaigns.includes(doc.id)) {
                      this.setState({
                        campaigns: this.state.campaigns.concat(doc.id),
                      });
                      this.setState({
                        items: this.state.items.concat({
                          image: doc.data().url,
                          header: doc.data().Name,
                          extra: (
                            <div className={styles.extra_div}>
                              <Link route={`/campaigns/${doc.id}`}>
                                <a>
                                  <Button primary size="tini">
                                    View Campaign
                                  </Button>
                                </a>
                              </Link>
                              <Link route={`/campaigns/${doc.id}/requests`}>
                                <a>
                                  <Button primary size="tini">
                                    See Request
                                  </Button>
                                </a>
                              </Link>
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
                  } else {
                    const userRef = firebase
                      .firestore()
                      .collection("UserDetails")
                      .doc(userPAddress);
                    userRef.update({
                      backed: firebase.firestore.FieldValue.arrayRemove(
                        campaignAddress
                      ),
                    });

                    const array = [...this.state.campaigns];
                    const itemArray = [...this.state.items];
                    const index = array.indexOf(campaignAddress);
                    if (index !== -1) {
                      array.splice(index, 1);
                      itemArray.splice(index, 1);
                      this.setState({ campaigns: array, items: itemArray });
                    }
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
        <h1>Your Backed Campaigns</h1>
        <Card.Group
          items={this.state.items}
          itemsPerRow={3}
          className={styles.card}
        />
      </>
    );
  }
}
