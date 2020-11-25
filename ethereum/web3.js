import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server OR the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/7f4aec17753f4603841ca3d215189189"
  );

  web3 = new Web3(provider);
}

export default web3;
