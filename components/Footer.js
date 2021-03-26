import React from "react";
import { Container, Segment } from "semantic-ui-react";

const FixedMenuLayout = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{
        margin: "5em 0em 0em",
        padding: "3em 2em",
      }}
    >
      <Container style={{ display: "flex" }}>
        <div style={{ flex: "0.6" }}>
          <div style={{ display: "flex", flex: "0.65" }}>
            <h3 style={{ marginRight: "30px", textAlign: "left" }}>
              Abbas Attarwala
            </h3>
            <a href="mailto:abbasmattarwala@gmail.com">
              abbasmattarwala@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", flex: "0.65" }}>
            <h3 style={{ marginRight: "40px", textAlign: "left" }}>
              Prasanna Desai
            </h3>

            <a href="mailto:prasanna.desai01@gmail.com">
              prasanna.desai01@gmail.com
            </a>
          </div>
          <div style={{ display: "flex", flex: "0.65" }}>
            <h3 style={{ marginRight: "80px", textAlign: "left" }}>
              Taral Patel
            </h3>
            <a href="mailto:taralpatel1946@gmail.com">
              taralpatel1946@gmail.com
            </a>
          </div>
        </div>
        <div style={{ flex: "0.4", textAlign: "center" }}>
          <h2>Government Engineering College</h2>
          <h2>Dahod</h2>
        </div>
      </Container>
    </Segment>
  </div>
);

export default FixedMenuLayout;
