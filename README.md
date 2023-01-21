# dero-rpc-ts

> Typescript wrappers for Dero Services
> DeroWasm (DeroHe Go compiled to wasm for running in the browser or node)
> Dero RPC Bridge API for the browser.
> Dero Daemon and Wallet RPC

# BETA software and is still in active development and is subject to change.

## Install

```bash
npm install dero-rpc-ts
```

## Usage
```ts
import { DeroRpcBridgeWalletMethods } from 'dero-rpc-ts';

await DeroRpcBridgeWalletMethods.GetBalance(api,scid);

```


## WASM
```ts
import { DeroWasmWalletMethods } from 'dero-rpc-ts';

// the wasm from Go is dumped right into the window so we wrap it like this so its easily usable
export const DeroWasmWindow: DeroWasmWindowI = window
await DeroWasmWalletMethods.DeroWasmInitialize('mainnet',"https://deronode.com.for.real");

```

## Todo
* Straight RPC calls to daemon and wallet
* Finish the WASM methods

