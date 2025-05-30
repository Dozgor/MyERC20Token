const { expect } = require("chai");

describe("MyToken", function () {
  it("Should deploy and mint tokens", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy();

    const balance = await token.balanceOf(owner.address);
    expect(balance).to.be.gt(0);
  });

  it("Should allow the owner to burn tokens", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy();

    const initialBalance = await token.balanceOf(owner.address);
    const burnAmount = BigInt("100000000000000000000"); // 100 tokens

    await token.burn(burnAmount);

    const finalBalance = await token.balanceOf(owner.address);
    expect(finalBalance).to.equal(initialBalance - burnAmount);
  });
});