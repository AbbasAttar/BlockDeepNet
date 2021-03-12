import React from "react";
import { Segment } from "semantic-ui-react";
import CampaignCards from "../components/CampaignCards";
import Image from "next/image";

export default function CampaignIndex() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <p>Secure site for your ideas and money</p>
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
