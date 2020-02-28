var MandA = artifacts.require("MandA");

module.exports = function (deployer) {

  // var auctionBiddingTime = now;
  // var auctionBeneficiaryAddress = msg.sender;
  //deployer.deploy(SimpleAuction, auctionBiddingTime, auctionBeneficiaryAddress);
  //deployer.deploy(Auction, auctionBiddingTime, auctionBeneficiaryAddress);
  deployer.deploy(MandA);
};