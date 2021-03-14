import React from "react";
import { Segment } from "semantic-ui-react";
import CampaignCards from "../components/CampaignCards";
import Image from "next/image";

export default function CampaignIndex() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "-100px",
            flex: "0.8",
          }}
        >
          <h1>NEW WAY OF CROWD FUNDING</h1>
          <p style={{ marginTop: "25px", fontSize: "16px" }}>
            <b>BlockDeepNet</b> Makes it easier than it's ever been to raise
            fund with the most advanced blockchain technology it is quick and
            secure to raise funds and make investments in projects.
          </p>
        </div>
        <div>
          <Image src="/Homepage/blockchain.png" width="630px" height="500px" />
        </div>
      </div>
      <Segment>
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
          Latest Projects
        </h2>
        <CampaignCards />
      </Segment>
    </>
  );
}
