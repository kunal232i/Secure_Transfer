# Secure Transfer Project

![Secure Transfer](https://github.com/kunal232i/Secure_Transfer/assets/81668653/c9a0c175-3061-4d08-9506-6aa01d0aee8f)


Welcome to the Secure Transfer project! This application allows you to securely transfer funds using blockchain technology. All transactions are stored on a public blockchain network, ensuring transparency and immutability.

**Live Link:** [https://transfer-ef5d8.web.app/](https://transfer-ef5d8.web.app/)

## How it Works

### Smart Contract

The core of this project is a Solidity smart contract deployed on a public blockchain network. The smart contract is responsible for handling the transfer of funds and storing transaction details. The contract has the following features:

1. **addToBlockchain**: This function allows users to initiate a transfer by providing the receiver's address, transfer amount, a message, and a keyword. Each transfer is assigned a unique timestamp. The transaction details are stored on the blockchain, ensuring security and transparency.

2. **getAllTransactions**: Users can retrieve all the previous transactions made using this function. The transactions are returned as an array of structured objects, containing sender address, receiver address, timestamp, message, keyword, and the transfer amount.

3. **getTransactionCount**: This function returns the total number of transactions that have been processed by the smart contract.

### Frontend

The frontend is a React application that interacts with the smart contract through the Web3 API. It allows users to connect their wallets (using MetaMask) and initiate secure transfers.

Key features of the frontend include:

1. **Wallet Connection**: Users can connect their MetaMask wallets to the application, enabling them to initiate and approve transactions.

2. **Send Transaction**: Users can send funds to another address by providing the receiver's address, transfer amount, a message, and a keyword. After confirming the transaction in MetaMask, the transaction is processed and stored on the blockchain.

3. **Transaction History**: The application displays the transaction history, including sender and receiver addresses, timestamps, messages, keywords, and transfer amounts.

4. **Loading Indicator**: During transaction processing, a loading indicator is displayed, ensuring users are aware of the ongoing process.

## Usage

1. Connect your MetaMask wallet to the application.
2. Fill in the required details (receiver's address, transfer amount, message, and keyword).
3. Click the "Send" button to initiate the transfer.
4. Confirm the transaction in MetaMask.
5. The transaction will be processed and displayed in the transaction history section.

Please note that the keys or secret keys used for this project have been hidden in the environment variables to ensure security. The project's smart contract and frontend code are contained within a single repository.

## Disclaimer

The keys and secret keys used in this project are for educational purposes only and have no real-world value. This application is a demonstration of how blockchain technology can be used to facilitate secure transfers. Do not use real cryptocurrency or sensitive information with this application.

Feel free to explore and use the application responsibly!

**Note:** This README provides an overview of the Secure Transfer project and its functionalities without displaying actual code implementations. The code snippets provided earlier in the conversation showcase how the smart contract and frontend interact but have been abstracted for brevity. For the complete code implementation, please refer to the actual project repository.
