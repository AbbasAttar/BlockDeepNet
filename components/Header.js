import React, {Component} from "react";
import { Header, Button, Segment, Modal, Icon } from "semantic-ui-react";
import { Link } from "../routes";
import NewCampain from './NewCampain';

class HeaderClass extends Component{
  state ={
    modalOpen: false,
  };
  handleOpen = () => this.setState({ modalOpen: true });
  handleClose = () => this.setState({ modalOpen: false});

  render(){
    return (
      <Segment style={{ marginTop: "10px", paddingBottom: "5px" }} clearing>
        <Header as="h2" floated="left">
          <Link route="/">
            <div className="item" style={{ cursor: "pointer" }}>
              BlockDeepNet
            </div>
          </Link>
        </Header>
        <Header as="h3" floated="right">
          <Button content="Create Campaign" icon="add circle" primary onClick= {this.handleOpen} />
          <Modal
            closeIcon
            open={this.state.modalOpen}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
          >
            <Modal.Content>
            
              <NewCampain handleClose ={this.handleClose} />
            
            </Modal.Content>
  
            
          </Modal>
        </Header>
      </Segment>
    );
  }
}

export default HeaderClass;