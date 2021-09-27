require('dotenv').config();
const API_URL = process.env.API_URL;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

// For Hardhat 
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

const contractAddress = "0xfedb1d7702F31194Cbd4E803A6BBf58D7F9284C8";
const helloWorldContract = new web3.eth.Contract(contract.abi, contractAddress);

async function main() {
    const message = await helloWorldContract.methods.message().call();
    console.log("The message is: " + message);
  }
  main();