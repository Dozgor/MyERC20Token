# 🚀 MyERC20Token – Minimal ERC20 Token using OpenZeppelin

This project demonstrates how to create an ERC20 token in Solidity using the OpenZeppelin library.

---

## 📦 Token Parameters

- **Name**: MyToken  
- **Symbol**: MTK  
- **Decimals**: 18  
- **Initial supply**: 1000 MTK minted to the deployer  

---

## 🔧 How to Deploy & Test with Remix

1. Open [Remix](https://remix.ethereum.org)
2. Compile using Solidity version `^0.8.20`
3. Deploy `MyToken.sol` to the JavaScript VM
4. Test with functions:
   - `totalSupply()`
   - `balanceOf(address)`
   - `transfer(to, amount)`

---

## 🧪 Hardhat Test Suite

This project includes tests written with Hardhat and Chai covering:

- ✅ Deployment and initial minting of 1000 MTK tokens to the deployer  
- ✅ Custom `burn(uint256 amount)` function tested and validated  
- ✅ Assertion of token balance changes using Hardhat and Chai  
- ✅ OpenZeppelin’s ERC20 contract imported and compiled successfully  

### ▶ To run the tests:

```bash
npx hardhat test

✅ Expected output:
MyToken
  ✔ Should deploy and mint tokens
  ✔ Should allow the owner to burn tokens

11 passing
```

🧠 Educational Value
This repo is part of my Solidity learning journey. It shows:

How to create a basic ERC20 token

How to use OpenZeppelin contracts

How to initialize the total supply with decimals

How to write and run Hardhat tests

