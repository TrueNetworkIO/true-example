## True Network Example

This is a simple example of on-chain attestation using True Network.

The `true-network` directory gets created using the [reputation-cli](https://github.com/truenetworkio/reputation-cli), using the `reputation-cli init` command.

The index.ts file contains a simple attestation logic, using the schemas. 

Notice that in the complete process the devex is designed in the structure of normal API keys in web2 yet it uses web3 wallets & keys.

> The algorithm folder is the directory to write an algorithm in AssemblyScript.

You can build the algorithm by running: `yarn asbuild:release` in the algorithm directory.

And then you can deploy the wasm generated in the build folder to the testnet at: https://truenetwork.io/explorer/raman

ps. we are currently working on a better structure for algorithm reducing developer efforts but it will take a couple of weeks to do so. 