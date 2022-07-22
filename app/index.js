const Web3 = require("web3");
let web3 = new Web3(
  "https://rinkeby.infura.io/v3/23a4d9e4ff294bfc8bf3e935729b0e22"
);
web3.eth.getChainId().then(function (chainId) {
  console.log(chainId);
});
