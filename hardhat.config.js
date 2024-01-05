require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const ALCHEMY_API_KEY ="Enter Your Alchemy API KEY";
const SEPOLIA_PRIVATE_KEY ="Enter your Sepolia API KEY";
module.exports = {
  solidity: "0.8.20",
  etherscan:{
    apikey: "Enter Your Etherscan API KEY"
  },
  networks: {
    sepolia:{
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
