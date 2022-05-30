// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// LearnWeb3NFT is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract LearnWeb3NFT is ERC721 {

    constructor() ERC721("LearnWeb3 NFT", "LW-NFT") {
        //minting 2 NFTs for myself
        _mint(msg.sender, 1);
        _mint(msg.sender, 2);
    }
}