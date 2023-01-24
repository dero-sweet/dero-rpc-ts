import { WalletResponse, DeroWasmWindow } from './DeroWasmTypes';

//
// Wallet
//

export interface DeroCreateNewWalletParams {
  password: string;
}

export interface DeroCreateNewWalletResult {
  hexSeed: string;
  fileData: ArrayBuffer; //Uint8Array
  address: string;
  seed: string;
  json?: any;
}

export const CreateNewWallet = async (params: DeroCreateNewWalletParams) => {
  const res = DeroWasmWindow.CreateNewWallet(params.password);
  if (res.value) {
    const value: DeroCreateNewWalletResult = {
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

export interface DeroWasmOpenWalletI {
  walletKey: string;
  password: string;
  fileData: any; // Uint8Array
}

export const DeroWasmOpenWallet = async (params: DeroWasmOpenWalletI) => {
  const res = DeroWasmWindow.OpenWallet(
    params.walletKey,
    params.password,
    params.fileData,
    true
  );
  return res;
};

export interface DeroWasmRecoverWalletFromHexSeedParams {
  password: string;
  hexSeed: string;
}

export const DeroWasmRecoverWalletFromHexSeed = async (
  params: DeroWasmRecoverWalletFromHexSeedParams
) => {
  const res = DeroWasmWindow.RecoverWalletFromHexSeed(
    params.password,
    params.hexSeed
  );
  console.log(res);
  if (res.value) {
    const value: DeroCreateNewWalletResult = {
      ...res.value,
      json: convertFileDataToJson(res.value.fileData),
    };
    res.value = value;
  }
  return res;
};

export interface DeroWasmRecoverWalletFromSeedParams {
  password: string;
  seed: string;
}

export const DeroWasmRecoverWalletFromSeed = async (
  params: DeroWasmRecoverWalletFromSeedParams
) => {
  const res = DeroWasmWindow.RecoverWalletFromSeed(
    params.password,
    params.seed
  );
  console.log(res);
  if (res.value) {
    const value: DeroCreateNewWalletResult = {
      ...res.value,
      json: convertFileDataToJson(res.value.fileData),
    };
    res.value = value;
  }
  return res;
};

// todo RecoverWalletFromDisk
// WalletGetEncryptedData
// WalletGetTopoHeight
// WalletGetAddress

export interface DeroWasmWalletGetBalanceI {
  walletKey: string;
  scid: string;
}

export const DeroWasmWalletGetBalance = async (
  params: DeroWasmWalletGetBalanceI
) => {
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

// todo wallet transfers
// WalletTransfer
// WalletGetTransfers
// WalletSendTransaction

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

export const Initialize = async (env: string, daemonEndpoint: string) => {
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
