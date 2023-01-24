import { WalletResponse, DeroWasmWindow } from './DeroWasmTypes';
import { DeroWasmWalletResponse } from '../lib/DeroWasmWalletTypes';

//
// Wallet
//

export interface CreateNewWalletParams {
  password: string;
}

export interface CreateNewWalletResult {
  hexSeed: string;
  fileData: ArrayBuffer; //Uint8Array
  address: string;
  seed: string;
  json?: any;
}

export const CreateNewWallet = async (params: CreateNewWalletParams) => {
  const res = DeroWasmWindow.CreateNewWallet(params.password);
  if (res.value) {
    const value: CreateNewWalletResult = {
      ...res.value,
      json: convertFileDataToJson(res.value.fileData),
    };
    res.value = value;
  }
  return res;
};

export const CloseWallet = async (walletKey: string) => {
  const res = DeroWasmWindow.CloseWallet(walletKey);
  return res;
};

export const CloseAllWallets = async () => {
  const res = DeroWasmWindow.CloseAllWallets();
  return res;
};

export interface OpenWalletParams {
  walletKey: string;
  password: string;
  fileData: any; // Uint8Array
}

export const OpenWallet = async (params: OpenWalletParams) => {
  const res = DeroWasmWindow.OpenWallet(
    params.walletKey,
    params.password,
    params.fileData,
    true
  );
  return res;
};

export interface RecoverWalletFromHexSeedParams {
  password: string;
  hexSeed: string;
}

export const RecoverWalletFromHexSeed = async (
  params: RecoverWalletFromHexSeedParams
) => {
  const res = DeroWasmWindow.RecoverWalletFromHexSeed(
    params.password,
    params.hexSeed
  );
  if (!res.value) return res;
  const result: RecoverWalletFromSeedResult = {
    ...res,
    value: {
      ...res.value,
      json: convertFileDataToJson(res.value.fileData),
    },
  };
  return result;
};

export interface RecoverWalletFromSeedParams {
  password: string;
  seed: string;
}
export interface RecoverWalletFromSeedResult extends WalletResponse {
  value: CreateNewWalletResult;
}

export const RecoverWalletFromSeed = async (
  params: RecoverWalletFromSeedParams
) => {
  const res = DeroWasmWindow.RecoverWalletFromSeed(
    params.password,
    params.seed
  );
  if (!res.value) return res;
  const result: RecoverWalletFromSeedResult = {
    ...res,
    value: {
      ...res.value,
      json: convertFileDataToJson(res.value.fileData),
    },
  };
  return result;
};

// todo RecoverWalletFromDisk
// WalletGetEncryptedData
// WalletGetTopoHeight
// WalletGetAddress

export interface WalletGetBalanceParams {
  walletKey: string;
  scid: string;
}

export const WalletGetBalance = async (params: WalletGetBalanceParams) => {
  // the result is stored in the window interface with this key
  const asyncKey = 'DeroWasmWalletGetBalance';
  const res = DeroWasmWindow.WalletGetBalance(
    asyncKey,
    params.walletKey,
    params.scid
  );
  return res;
};

export interface WalletGetSeedResponse extends WalletResponse {
  value: string;
}

export const WalletGetSeed = async (walletKey: string) => {
  const res: WalletGetSeedResponse = DeroWasmWindow.WalletGetSeed(walletKey);
  return res;
};

export interface WalletGetHexSeedResponse extends WalletResponse {
  value: string;
}

export const WalletGetHexSeed = async (walletKey: string) => {
  const res: WalletGetHexSeedResponse =
    DeroWasmWindow.WalletGetHexSeed(walletKey);
  return res;
};

export interface WalletIsRegisteredResponse extends WalletResponse {
  value: boolean;
}

export const WalletIsRegistered = async (walletKey: string) => {
  const res: WalletIsRegisteredResponse =
    DeroWasmWindow.WalletIsRegistered(walletKey);
  return res;
};

// Transfers
export interface WalletTransferParams {
  asyncKey: string;
  walletKey: string;
  data: string;
}

export const WalletTransfer = async ({
  asyncKey,
  walletKey,
  data,
}: WalletTransferParams) => {
  const res = DeroWasmWindow.WalletTransfer(asyncKey, walletKey, data);
  return res;
};

export interface WalletSendTransactionParams {
  //result is stored in asyncKey in the window interface
  asyncKey: string;
  walletKey: string;
  txHex: string;
}

export const WalletSendTransaction = async ({
  asyncKey,
  walletKey,
  data,
}: WalletTransferParams) => {
  const res = DeroWasmWindow.WalletSendTransaction(asyncKey, walletKey, data);
  return res;
};

export interface WalletGetTransfersParams {
  //result is stored in asyncKey in the window interface
  walletKey: string;
  coinbase: boolean;
  inTxs?: boolean;
  outTxs?: boolean;
}

export interface WalletGetTransfersResponse extends WalletResponse {
  // todo check on this type
  value: string;
}

export const WalletGetTransfers = async ({
  walletKey,
  coinbase = true,
  inTxs = true,
  outTxs = true,
}: WalletGetTransfersParams) => {
  const res: WalletGetTransfersResponse = DeroWasmWindow.WalletGetTransfers(
    walletKey,
    coinbase,
    inTxs,
    outTxs
  );
  return res;
};

// todo wallet register the old slow way

export const FastRegister = async () => {
  const asyncKey = 'FastRegister';
  const res = DeroWasmWindow.FastRegister(asyncKey);

  return res;
};
/*
let fastRegResp = window.FastRegister(1)
console.log("fastRegResp",fastRegResp)
let key = `RegistrationStatus_<number: 1>`
console.log("window",window[key])
*/

//
// Daemon Node
//
export interface InitializeParams {
  env: string;
  daemonEndpoint: string;
}
export const Initialize = async ({ env, daemonEndpoint }: InitializeParams) => {
  const res = DeroWasmWindow.Initialize(env, daemonEndpoint);
  return res;
};

export interface DecodeHexTransactionResponse extends WalletResponse {
  value: string;
}

export const DecodeHexTransaction = async (txHex: string) => {
  const res: DecodeHexTransactionResponse =
    DeroWasmWindow.DecodeHexTransaction(txHex);
  return res;
};

export interface VerifyAddressResponse extends WalletResponse {
  value: boolean;
}

export const VerifyAddress = async (addrString: string) => {
  const res: VerifyAddressResponse = DeroWasmWindow.VerifyAddress(addrString);
  return res;
};

export const CheckSeed = async (addrString: string) => {
  const res = DeroWasmWindow.CheckSeed(addrString);
  // for some reason if the checkseed
  // fails the go wasm wrapper returns an error in err and doesnt return a bool for value
  // and if it succeeds it returns nil, nil.
  return res;
};

export const DaemonSetAddress = async (addr: string) => {
  const asyncKey = 'DeroDaemonSetAddressResult';
  const res = DeroWasmWindow.DaemonSetAddress(asyncKey, addr);
  return res;
};

export interface DaemonGetTopoHeightResponse extends WalletResponse {
  value: string;
}

export const DaemonGetTopoHeight = async () => {
  const res: DaemonGetTopoHeightResponse = DeroWasmWindow.DaemonGetTopoHeight();
  return res;
};

export interface DaemonCallParams {
  asyncKey: string;
  method: string;
  data: string;
}

export const DaemonCall = async (params: DaemonCallParams) => {
  const res = DeroWasmWindow.DaemonCall(
    params.asyncKey,
    params.method,
    params.data
  );
  //console.log("daemon call", res)
  return res;
};

// many of the dero wasm calls are async
// you must provide a key to find the returned data in the window interface
export const GetBlock = async () => {
  const method = 'DERO.GetBlock';
  const json = {};
  const res = DeroWasmWindow.DaemonCall(method, method, JSON.stringify(json));
  console.log('get block', res);
  return res;
};
//todo implement more of the dero daemon rpc calls using DaemonCall

//
// Utils
//

export function hex_to_ascii(str1: string) {
  const hex = str1.toString();
  let str = '';
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

export const toHexString = (bytes: any) => {
  //@ts-ignore
  return bytes.reduce(
    (str: string, byte: any) => str + byte.toString(16).padStart(2, '0'),
    ''
  );
};
const convertFileDataToJson = (fileData: ArrayBuffer) => {
  const charArray = new Uint8Array(fileData);
  const hexString = toHexString(charArray);
  const decode = hex_to_ascii(hexString);
  const json = JSON.parse(decode);
  return json;
};
