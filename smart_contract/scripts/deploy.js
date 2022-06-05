const main = async () => {
  const CrowdfundingFactory = await hre.ethers.getContractFactory(
    "crowdfunding"
  );
  const CrowdfundingContract = await CrowdfundingFactory.deploy();

  await CrowdfundingContract.deployed();

  console.log("Transactions address: ", CrowdfundingContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
