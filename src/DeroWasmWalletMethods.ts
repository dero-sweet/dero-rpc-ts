import { DeroWasmWindow } from './DeroWasmWalletTypes';
export interface DeroCreateNewWalletParams {
  password: string;
}

export interface DeroCreateNewWalletResult {
  //{
  //     "hexSeed": "2d1f79dc85f304f5e704d88abca4b9423af9fb47b4ebd2d416ba4324914f0340",
  //     "fileData": {},
  //     "address": "dero1qy3mphzg2fkscrgv74uq4ct9ez4g0cteyn6dxp0jtju0eup9cn6dwqggnuuly",
  //     "seed": "tepid unknown scuba toffee powder oxygen duplex faxed swiftly highway sober apex evaluate apricot gimmick kisses wonders stacking adept cactus fall evenings lamb ripped stacking"
  // }
  hexSeed: string;
  fileData: ArrayBuffer; //Uint8Array
  address: string;
  seed: string;
}

export const CreateNewWallet = async (params: DeroCreateNewWalletParams) => {
  console.log('Create new Wallet');
  //let res = WasmWindow[DeroWasmWalletMethodTypes.CreateNewWallet](params.password)
  //@ts-ignore
  const res = DeroWasmWindow.CreateNewWallet(params.password);
  if (!res.value) return;
  const value: DeroCreateNewWalletResult = res.value;
  console.log('new wallet ', res);
  return value;
};

export const FastRegister = async () => {
  console.log('Fast Register');
  //@ts-ignore
  const res = window.FastRegister(1);
  if (!res.value) return;
  const value = res.value;

  return value;
};

export interface DeroRecoverWalletFromHexSeedParams {
  password: string;
  hexSeed: string;
}

export const DeroRecoverWalletFromHexSeed = async (
  params: DeroRecoverWalletFromHexSeedParams
) => {
  //@ts-ignore
  const res = DeroWasmWindow.RecoverWalletFromHexSeed(
    params.password,
    params.hexSeed
  );
  console.log(res);
  if (!res.value) return;
  const value: DeroCreateNewWalletResult = res.value;
  return value;
};

export interface DeroRecoverWalletFromSeedParams {
  password: string;
  seed: string;
}

export const DeroRecoverWalletFromSeed = async (
  params: DeroRecoverWalletFromSeedParams
) => {
  //@ts-ignore
  const res = DeroWasmWindow.RecoverWalletFromSeed(
    params.password,
    params.seed
  );
  console.log(res);
  if (!res.value) return;
  const value: DeroCreateNewWalletResult = res.value;
  return value;
};

export const DeroWasmInitialize = async () => {
  const env = 'mainnet';
  const daemonEndpoint = 'https://dero-api.mysrv.cloud';

  const res = DeroWasmWindow.Initialize(env, daemonEndpoint);
  console.log('set dero daemon addr', res);
  return res;
};
export const DeroWasmDaemonSetAddress = async (addr: string) => {
  const key = 'DaemonSetAddressResult';
  //@ts-ignore
  const res = window.DaemonSetAddress(key, addr);
  console.log('set dero daemon addr', res);
  return res;
};
/*
let fastRegResp = window.FastRegister(1)
console.log("fastRegResp",fastRegResp)
let key = `RegistrationStatus_<number: 1>`
console.log("window",window[key])*/

export const DeroWasmDaemonGetTopoHeight = async () => {
  //@ts-ignore
  const res = window.DaemonGetTopoHeight();
  //console.log("get height", res)
  return res;
};

export interface DeroWasmDaemonCallParams {
  asyncKey: string;
  method: string;
  data: string;
}

export const DeroWasmDaemonCall = async (params: DeroWasmDaemonCallParams) => {
  const res = DeroWasmWindow.DaemonCall(
    params.asyncKey,
    params.method,
    params.data
  );
  //console.log("daemon call", res)
  return res;
};

export const GetBlock = async () => {
  const method = 'DERO.GetBlock';
  const json = {};
  const res = await DeroWasmDaemonCall({
    method: method,
    asyncKey: method,
    data: JSON.stringify(json),
  });
  console.log('get block', res);
  return res;
};

export interface DeroWasmOpenWalletI {
  walletKey: string;
  password: string;
  fileData: any; // Uint8Array
}

export const DeroWasmOpenWallet = async (params: DeroWasmOpenWalletI) => {
  console.log('openwallet params', params);
  const res = DeroWasmWindow.OpenWallet(
    params.walletKey,
    params.password,
    params.fileData,
    true
  );
  console.log('openwallet ', res);
};

export interface DeroWasmWalletGetBalanceI {
  walletKey: string;
  scid: string;
}

export const DeroWasmWalletGetBalance = async (
  params: DeroWasmWalletGetBalanceI
) => {
  const asyncKey = 'DeroWasmWalletGetBalance';
  console.log('get balance params', params);
  const res = DeroWasmWindow.WalletGetBalance(
    asyncKey,
    params.walletKey,
    params.scid
  );
  console.log('balance ', res);
};
