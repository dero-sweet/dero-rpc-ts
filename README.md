# dero-rpc-ts

> Typescript wrappers for Dero Services
> DeroWasm (DeroHe Go compiled to wasm for running in the browser or node)
> Dero RPC Bridge API for the browser.
> Dero Daemon and Wallet RPC

## Install

```bash
npm install dero-rpc-ts
```

## Usage

```ts
import { DeroWasmWalletMethods } from 'dero-rpc-ts';

await DeroWasmWalletMethods.DeroWasmInitialize('mainnet',"https://deronode.com.for.real");

```

## Todo
* Fill our rpc calls