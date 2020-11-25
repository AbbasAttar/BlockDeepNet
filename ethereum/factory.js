import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x38b905D8d4c0A5Df13F92A17703Daf98376288ee"
);

export default instance;
