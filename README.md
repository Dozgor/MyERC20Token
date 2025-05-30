## 🚀 MyERC20Token – Minimal ERC20 token using OpenZeppelin

This project demonstrates how to create an ERC20 token in Solidity using the OpenZeppelin library.

### 📦 Token Parameters
- **Name**: MyToken
- **Symbol**: MTK
- **Decimals**: 18
- **Initial supply**: 1000 MTK minted to the deployer

### 🔧 How to Deploy & Test
1. Open [Remix](https://remix.ethereum.org/)
2. Compile using Solidity version ^0.8.20
3. Deploy `MyToken.sol` to JavaScript VM
4. Call `totalSupply()`, `balanceOf(address)`, `transfer(to, amount)` to test

🧪 Hardhat Tests

This project includes tests written with Hardhat and Chai.

Test coverage:
- ✅ Deployment and initial minting to the deployer
- ✅ Token burning by the owner, reducing both balance and total supply

To run the tests:

    npx hardhat test

Expected output:

    MyToken
      ✔ Should deploy and mint tokens
      ✔ Should allow the owner to burn tokens

### 🧠 Educational Value
This repo is part of my Solidity learning journey. It shows:
- How to create a basic ERC20 token
- How to use OpenZeppelin contracts
- How to initialize supply with decimals

✅ Hardhat Test Suite
This project includes a Hardhat test suite covering:

✅ Deployment and initial minting of 1000 MTK tokens to the deployer

✅ Custom burn(uint256 amount) function tested

✅ Assertion of token balance changes using Hardhat and Chai

✅ OpenZeppelin’s ERC20 contract imported and compiled successfully

To run the tests:

npx hardhat test
Expected output: 11 passing (including both deployment and burn tests)



---

