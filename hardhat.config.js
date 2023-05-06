/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: ['0x${PRIVATE_KEY}'],
    },
  },
};


// 0xaC22293A508871DA6A6e73B72275339892AC77E8
// d9416c9426dd1c37c7b70dedb4decc4d92fe5f1979028f401824c0f36989ae72