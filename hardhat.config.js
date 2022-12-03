require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { API_KEY_MUMBAI, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {},
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${API_KEY_MUMBAI}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  defaultNetwork: "mumbai",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
