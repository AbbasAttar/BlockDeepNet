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
      <div style={{ margin: "10px", paddingBottom: "10px", height: "60px"}} clearing>
        <Header as="h1" floated="left">
          <Link route="/">
            <div className="item" style={{ cursor: "pointer" }}>
              BlockDeepNet
            </div>
          </Link>
        </Header>
        <Header as="h3" floated="right">
          <Button content="Create Campaign" style={{ backgroundColor: "transparent"}} onClick= {this.handleOpen} />
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
          <Link route="/Login">
            <Button content="Login" style={{ backgroundColor: "transparent"}}/>
          </Link>
          
          <Button content="Sign up"style={{ backgroundColor: "transparent"}}/>
        </Header>
        <br />
      </div> 
    );
  }
}

export default HeaderClass;