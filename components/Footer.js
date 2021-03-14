import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "3em 0em" }}
    >
      <Container textAlign="center">
        <div style={{ display: "flex" }}>
          <h3 style={{ marginRight: "30px" }}>Abbas Attarwala</h3>
          <a>abbasmattarwala@gmail.com</a>
        </div>
        <div style={{ display: "flex" }}>
          <h3 style={{ marginRight: "30px" }}>Prasanna Desai</h3>
          <a>prasanna.desai01@gmail.com</a>
        </div>
        <div style={{ display: "flex" }}>
          <h3 style={{ marginRight: "30px" }}>Taral Patel</h3>
          <a>taral.patel@gmail.com</a>
        </div>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
