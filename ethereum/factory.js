import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x57ae80C0e228b1f1F964A44bd5a5B3FD3604AB58"
);

export default instance;
