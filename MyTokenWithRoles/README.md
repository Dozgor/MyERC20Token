# MyTokenWithRoles

## ✨ A minimal ERC20 token with secure minting using `Ownable` (OpenZeppelin v5)

This smart contract demonstrates:
- ERC20 token creation with custom name and symbol
- Minting capability restricted to the contract owner
- Optional burn functionality for any token holder
- Solidity ^0.8.20 compatibility with OpenZeppelin ^5.0.1

## 🔐 Permissions

The contract inherits from [`Ownable`](https://docs.openzeppelin.com/contracts/5.x/api/access#Ownable), and sets the initial owner in the constructor using:

---

```solidity
constructor() ERC20("MyToken", "MTK") Ownable(msg.sender)
Only the owner can mint new tokens:

function mint(address to, uint256 amount) public onlyOwner
Anyone can burn their own tokens:

function burn(uint256 amount) public {
    require(balanceOf(msg.sender) >= amount, "Solde insuffisant pour bruler");
    _burn(msg.sender, amount);
}
```
---

## 🔥 Burn Feature
This function allows any token holder to reduce the totalSupply by burning tokens from their own balance.
It includes a require() check to prevent over-burning.

## 🧪 Manual Testing (via Remix)

Deploy the contract with JavaScript VM or local environment

As the owner, call mint(to, amount) → ✅ success

Switch account, try mint() again → ❌ reverts with Ownable: caller is not the owner

Transfer tokens to another account → use burn() → ✅ totalSupply decreases

## 🧱 Tech Stack

Solidity ^0.8.20

OpenZeppelin Contracts ^5.0.1

Remix IDE with remixd for local imports

## 📌 Files

MyTokenWithRoles.sol

## ✅ TODO (Next Steps)

Replace Ownable with AccessControl

Add MINTER_ROLE and BURNER_ROLE

Deploy to testnet (e.g. Sepolia or Mumbai)

Write unit tests with Hardhat

## 🧠 Author's Note

This project is part of the IA-assisted Solidity learning journey by Dozgor.

