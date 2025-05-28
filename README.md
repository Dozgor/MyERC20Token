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

### 🧠 Educational Value
This repo is part of my Solidity learning journey. It shows:
- How to create a basic ERC20 token
- How to use OpenZeppelin contracts
- How to initialize supply with decimals

---

## ✅ Next Steps (optional)
- Add a test with Hardhat
- Add a function to burn tokens
- Deploy to a testnet (Goerli, Sepolia)
