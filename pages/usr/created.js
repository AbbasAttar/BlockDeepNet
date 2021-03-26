import React, { Component } from "react";
import firebase from "../../components/firebase";
import { LoginContext } from "../../components/LoginContext";
import { Link } from "../../routes";
import { Button, Card, Confirm } from "semantic-ui-react";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import styles from "../../css_modules/page_css/usr.module.css";

export default class Created extends Component {
  static contextType = LoginContext;
  state = {
    campaigns: [],
    items: [],
    deleteCampaign: "",
    deleteURL: "",
    open: false,
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
                          <div className={styles.extra_div}>
                            <Link route={`/campaigns/${doc.id}`}>
                              <a>
                                <Button primary size="tini">
                                  View Campaign
                                </Button>
                              </a>
                            </Link>
                            <Link route={`/campaigns/${doc.id}/requests/new`}>
                              <a>
                                <Button primary size="tini">
                                  Add request
                                </Button>
                              </a>
                            </Link>

                            <Button
                              negative
                              size="tini"
                              onClick={() =>
                                this.setState({
                                  open: true,
                                  deleteCampaign: doc.id,
                                  deleteURL: doc.data().url,
                                })
                              }
                            >
                              Delete
                            </Button>
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
            }
          }
        });
      });
  }

  handleDelete = async () => {
    const { userPAddress } = this.context;
    const campaignAddress = this.state.deleteCampaign;
    const campaignImageURL = this.state.deleteURL;
    try {
      console.log("inside delete");
      const campaign = Campaign(this.state.deleteCampaign);
      const accounts = await web3.eth.getAccounts();
      await campaign.methods
        .closeCampaign(true)
        .send({
          from: accounts[0],
        })
        .then(() => {
          const deleteDocRef = firebase
            .firestore()
            .collection("CampaignDetail")
            .doc(campaignAddress);

          deleteDocRef
            .delete()
            .then(() => {
              console.log("Document Deleted");
            })
            .catch((err) => {
              console.error(err);
            });

          const deleteImageRef = firebase
            .storage()
            .refFromURL(campaignImageURL);
          deleteImageRef
            .delete()
            .then(() => {
              console.log("Image Deleted");
            })
            .catch((err) => {
              console.error(err);
            });

          const userRef = firebase
            .firestore()
            .collection("UserDetails")
            .doc(userPAddress);
          userRef.update({
            created: firebase.firestore.FieldValue.arrayRemove(campaignAddress),
          });

          const array = [...this.state.campaigns];
          const itemArray = [...this.state.items];
          const index = array.indexOf(campaignAddress);
          if (index !== -1) {
            array.splice(index, 1);
            itemArray.splice(index, 1);
            this.setState({ campaigns: array, items: itemArray });
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    this.setItems();
    return (
      <>
        <h1>Your Created Campaigns</h1>
        <Card.Group
          items={this.state.items}
          itemsPerRow={3}
          className={styles.card}
        />
        <Confirm
          open={this.state.open}
          onCancel={() => {
            this.setState({ open: false });
          }}
          onConfirm={() => {
            this.handleDelete();
            this.setState({ open: false });
            this.setState({ deleteCampaign: "", deleteURL: "" });
          }}
        />
      </>
    );
  }
}
