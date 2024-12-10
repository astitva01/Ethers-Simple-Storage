// synchronous [solidity]
// asynchronous [JavaScript]

// Cooking

// Synchronous
// 1. Put popcorn in the microwave -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in the microwave
// 2. Pour drinks for everyone
// 3. Pour drinks for everyone

// Promise
// Pending
// Fulfilled
// Rejected

const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  // compile them in our code
  // compile them seperately
  // http://0.0.0.0:7545
  const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
  //   const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf-8");
  let wallet = await ethers.Wallet.fromEncryptedJson(
    encryptedJson,
    process.env.PRIVATE_KEY_PASSWORD
  );
  wallet = wallet.connect(provider);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf-8"
  );
  //   const { ContractFactory } = ethers;
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy(); // STOP here! Wait for contract to deploy
  //   const transactionReceipt = await contract.deploymentTransaction().wait(1);
  //   console.log("Here is the deployment transaction (transaction response): "); // response is what you get when you create your transaction
  //   console.log(contract.deploymentTransaction());

  //   console.log("Here is the transaction receipt: "); // receipt is what you will get when you wait for a transaction to finish
  //   console.log(contract.transactionReceipt);
  await contract.deploymentTransaction().wait(1);

  // Get Number
  const currentFavoriteNumber = await contract.retrieve();
  console.log(`Current Favorite Number: ${currentFavoriteNumber.toString()}`);
  const transactionResponse = await contract.store("7");
  const transactionReceipt = await transactionResponse.wait(1);
  const updatedFavoriteNumber = await contract.retrieve();
  console.log(`Updated Favorite Number: ${updatedFavoriteNumber}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
