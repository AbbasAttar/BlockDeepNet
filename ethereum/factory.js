import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x8a28564a8f55b605b18c24dc8641b580a5b661c3"
);

export default instance;
