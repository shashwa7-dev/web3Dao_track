const { ethers } = require("hardhat");

async function main() {
  const VanillaVitalik = await ethers.getContractFactory("VanillaVitalik");
  const ref_VanillaVitalik = await VanillaVitalik.deploy(
    "Vanilla Vitalik",
    "VNLVITLK"
  );

  try {
    await ref_VanillaVitalik.deployed();
    console.log(`Contract deployed to ${ref_VanillaVitalik.address}`);
    await mintNFT();
  } catch (err) {
    console.log(`Deployment Error: ${err.message}`);
  }

  //
  async function mintNFT() {
    let meta_link =
      "https://ipfs.io/ipfs/QmXALjkaJiSQBkwFPP5QjEVBKtTuooAGvyQUnss8LvuKRB";
    try {
      const newItemId = await ref_VanillaVitalik.mint(meta_link);
      console.log("🥳 NFT minted successfully 🎉 >", newItemId);
    } catch (err) {
      console.log("Mint error:", err.message);
    }
  }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
