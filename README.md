# Project Title

This is the Project 3 DeFi Yield Staking Dapp.  We allow users to deposit Tether Tokens and we give them a reward
based on how much they deposit divided by 5 (StakeBalance/5).  One can deposit a maximum of 100 tokens, and earn
a maximum reward of 100/5 = 20 tokens. Once the user hits withdraw, all the money is taken out at once.


## Technologies and Installation Guide
We have python version 3.7.10 and git version 2.33.0.windows.2 installed on a laptop running windows 10 pro. We also have MetaMask
and Ganache installed.

Install node.js to be able to run javascript from the command line. Run 'node -v' after install to ensure you get a version number.
Install truffle suite to be able to compile and migrate contracts to the blockchain using one of the address you get when launching Ganache. You can run 'npm install -g truffle' (the g here is global so it hits all your environments).
 
---

## Usage

Open the command prompt and go to the directory where your code sits.  
I) Compile the contracts by running 'truffle compile'
II) Migrate the contracts to the blockchain by running 'truffle migrate --reset'
III) Launch the webpage that runs the front-end by running 'npm start'
IV) Deposit some money and enjoy getting rich!


---

## Contributors
Paul Lopez, Chaim Kriger, Austin Do.


---

## License
No licenses required. Just install everything for free, pull from my repository, and enjoy!
