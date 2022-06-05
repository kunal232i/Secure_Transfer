// https://eth-rinkeby.alchemyapi.io/v2/9_t0szUbYw4AA0R9xExptP1kQA1NVpoy
// dffd241a18f96d7ec7e0265e71815820f79e6d402e89570ee212073264030eb7

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
