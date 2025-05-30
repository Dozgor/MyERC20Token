// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// This contract creates a basic ERC20 token using OpenZeppelin's implementation.
contract MyToken is ERC20 {
    // The constructor sets the token name and symbol, and mints 1000 tokens to the deployer.
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000 * 10 ** decimals());
    }
}
