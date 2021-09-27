const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("HelloWorld contract", function () {
  it("Deployment should show a message from the owner", async function () {
    const orginMessage = "Test";
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy("Test");
    await helloWorld.deployed();

    let message = await helloWorld.message.call();
    expect(message).to.equal(orginMessage);

    // await helloWorld.update("Test2");
    // message = await helloWorld.message.call();
    // expect(message).to.equal(orginMessage);
  });
});
