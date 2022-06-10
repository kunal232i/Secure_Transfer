const main = async () => {
  const TransactionFactory = await hre.ethers.getContractFactory("transaction");
  const TransactionContract = await TransactionFactory.deploy();

  await TransactionContract.deployed();

  console.log("Transactions address: ", TransactionContract.address);
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
