# Project Title

This is the Project 3 DeFi Yield Staking and Loans Dapp.  We allow users to deposit Tether Tokens and we give them a reward
based on how much they deposit divided by 5 (StakeBalance/5 or 20% return).  One can deposit a maximum of 100 tokens, and earn a maximum reward of 100/5 = 20 tokens. Once the user hits withdraw, all the money is taken out at once.

Smart Contract description and logic/functions used within the contract:
Tether.sol and RWD.sol: These are the smart contracts that create the two coins we use in this project. Tether is the coin that the client uses to deposit in our bank.  RWD is the reward token or coin that we give the client for depositing their Tether with us.  If we were to expand this in theory we could create a smart contract for any major cryptocurrency that we feel we could realistically profit from.  We could also in the future decide to reward clients with real cryptocurrency versus our own reward token.

The main functions we make use of are the transfer() and approve() functions in both contracts.  The transfer function 
requires that the sender's be larger than 0, and then the function subtracts the amount to from the sender's balance, and adds the amount sent to the receiver's balance.  The approve function is important in case anyone wants to send coin to anyone else besides the 'central bank'. This function allows that transfer to take place.

DecentralBank.sol: This smart contract is really the brains behind the yield staking aspect of this project.  We have two 
functions that control the deposit and withdrawing, and those functions are depositTokens() and unstakeTokens(), respectively. DepositTokens() makes a call to the transfer function from the Tether smart contract, and unstakeTokens() makes a call to the transfer function as well, but with the amounts and sender/receivers reversed.

The issueTokens() function is the function that does the rewarding of our mock reward token to the client.  In the javascript file Airdrop.js we have logic that if the amount deposited is greater than or equal to 50, we reward the tokens. For simplicity we just make the reward the amount deposited divided by 5, or 20% of the deposited amount. If we had more time we would want to investigate more closely how to import math libraries and do continuous compounding at a healthy interest rate to do the rewarding of tokens.

The Migrations.sol smart contract was mostly autogenerated for us when we first initiated the project in the truffle suite with the command 'truffle init'.  We only updated the pragma compiler version to be > 0.5.0 and added a constructor function
to make the owner equal to msg.sender.

Please see videos showing a demo of a Deposit, an issuance of reward tokens, and a withdrawal.

The second and more important part of the project is the Loan business part of the DeFi bank.



## Technologies and Installation Guide

For the yield staking part of the project you must do the following:

We have python version 3.7.10 and git version 2.33.0.windows.2 installed on a laptop running windows 10 pro. We also have MetaMask and Ganache installed.

Install node.js to be able to run javascript from the command line. Run 'node -v' after install to ensure you get a version number. Install truffle suite to be able to compile and migrate contracts to the blockchain using one of the address you get when launching Ganache. You can run 'npm install -g truffle' (the g here is global so it hits all your environments).

For the loans part of the project you must have the following installed:
 
---

## Usage

Open the command prompt and go to the directory where your code sits.  This is to run the yield staking part of the project.

I) Compile the contracts by running 'truffle compile'
II) Migrate the contracts to the blockchain by running 'truffle migrate --reset'
III) Launch the webpage that runs the front-end by running 'npm start'
IV) Deposit some money and enjoy getting rich!


---

## Contributors
Paul Lopez, Chaim Kriger, Austin Do, Isaac Iskra, Albert Peyton


---

## License
No licenses required. Just install everything for free, pull from the repository, and enjoy!
