# dero-rpc-ts
> Typescript wrappers for Dero Services

DeroWasm (DeroHe Go compiled to wasm for running in the browser or server side)
* Dero RPC Bridge API for the browser.
* Dero Daemon and Wallet RPC

# BETA software and is still in active development and is subject to change.

## Install

```bash
npm install dero-rpc-ts
```

## Usage for Rpc Bridge
```ts
import { DeroRpcBridgeWallet } from 'dero-rpc-ts';

await DeroRpcBridgeWallet.GetBalance(api,scid);

```


## Usage for WASM
```ts
import { DeroWasm } from 'dero-rpc-ts';

await DeroWasm.DeroWasmInitialize('mainnet',"https://your.dero.node.com");

// for direct access to the Wasm
// the current implementation of dero WASM from Go is dumped right into the window so we wrap it like this to make it easily usable
export const DeroWasmWindow: DeroWasmWindowI = window


```

## Todo
* Implement RPC calls to daemon and wallet
* Finish the WASM methods

