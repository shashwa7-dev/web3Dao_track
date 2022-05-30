// Import ethers from Hardhat package
const { ethers } = require("hardhat");

async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
  //1. Grab the contract you want to deploy
  const nftContract = await ethers.getContractFactory("LearnWeb3NFT");

  //2. Deploy it
  const deployedNFTContract = await nftContract.deploy();
  //2.1 Wait for it
  await deployedNFTContract.deployed();

  //3. print the address of the deployed contract
  console.log("NFT Contract Address:", deployedNFTContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
