# MyTokenWithRoles

> ✨ A minimal ERC20 token with secure minting using `Ownable` (OpenZeppelin v5)

This smart contract demonstrates:
- ERC20 token creation with custom name and symbol
- Minting capability restricted to the contract owner
- Solidity v0.8.20 compatibility with OpenZeppelin v5.0.1

### 🔥 burn()

Allows the owner to destroy their own tokens, reducing totalSupply.

## 🔐 Permissions

The contract inherits from [`Ownable`](https://docs.openzeppelin.com/contracts/5.x/api/access#Ownable), and the constructor sets the owner via:

🧪 Manual Testing (via Remix)
Deploy the contract

As the owner, call mint(to, amount) — ✅ success

Switch account, try again — ❌ reverts with Ownable: caller is not the owner

🧱 Tech Stack
Solidity ^0.8.20

OpenZeppelin Contracts ^5.0.1

Remix + remixd for local import resolution

📌 Files
MyTokenWithRoles.sol

✅ TODO (Next Steps)
Add burn() function

Add AccessControl with MINTER_ROLE

Deploy on testnet

🧠 Author's Note
This project is part of the IA-assisted Solidity learning journey by Dozgor.
