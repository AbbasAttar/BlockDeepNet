import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xad4E6226817164988339A0Cb7B17d2ebf85fE1Ab"
);

export default instance;
