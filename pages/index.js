import React from "react";
import { Segment } from "semantic-ui-react";
import CampaignCards from "../components/CampaignCards";
import Image from "next/image";
import styles from "../css_modules/page_css/index.module.css";

export default function CampaignIndex() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_div}>
          <h1>NEW WAY OF CROWD FUNDING</h1>
          <p className={styles.hero_p}>
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
        <h2 className={styles.segment_header}>Latest Projects</h2>
        <CampaignCards />
      </Segment>
    </>
  );
}
