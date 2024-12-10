# Ethers Simple Storage

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to install it with npm
- [ganache](https://trufflesuite.com/ganache/)

## Setup

Clone this repo

```
git clone https://github.com/astitva01/Ethers-Simple-Storage.git
cd Ethers-Simple-Storage
```

Then install dependencies

```
yarn
```

## Usage

1. Run your ganache local chain, by hitting `quickstart` on your ganache application

> Save the workspace. This way, next time you open ganache you can start the workspace you've created, otherwise you'll have to redo all the steps below.

2. Copy the `RPC SERVER` sting in your ganache CLI, and place it into your `.env`.

`.env` Example:

```
RPC_URL=http://0.0.0.0:7545
```

3. Hit the key on one of the accounts, and copy the key you see and place it into your `.env` file.

`.env` Example:

```
PRIVATE_KEY=11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a
```

4. Compile your code

Run

```
yarn compile
```

You'll see files `SimpleStorage_sol_SimpleStorage.abi` and `SimpleStorage_sol_SimpleStorage.bin` be created.

5. Run encryptKey.js

Run

```
node encryptKey.js
```

You'll see file `.encryptedKey.json` be created.

Add this `.encryptedKey.json` in your `.gitignore` for safety.

6. Run your application

```
node deploy.js
```

# Thank you!
