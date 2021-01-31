import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import Layout from "../components/Layout";
import CampaignCards from "../components/CampaignCards";

export default function CampaignIndex() {
  return (
    <Layout>
      <Segment>
        <h2 style={{ marginBottom: "30px", textAlign: "center" }}>
          Latest Projects
        </h2>
        <CampaignCards />
      </Segment>
    </Layout>
  );
}
