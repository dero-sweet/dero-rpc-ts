//@ts-ignore
export const DeroWasmWindow: DeroWasmWindowI = window;
export interface DeroWasmWalletResponse {
  value: any;
  err: any;
}

export interface DeroWasmWalletResponseNull {
  value: null;
  err: null;
}

//todo work out the explicit responses
/*export interface WalletEncryptedDataResult extends DeroWasmWalletResponse {
  value:string
}*/

//@ts-ignore
// in index.tsx export const DeroWasmWindow: DeroWasmWindowI = window

export interface DeroWasmWindowI {
  /// Methods exposed in g45 # Dero Wallet WASM
  CreateNewWallet: (password: string) => DeroWasmWalletResponse;
  CloseWallet: (walletKey: string) => DeroWasmWalletResponse;
  CloseAllWallets: () => DeroWasmWalletResponse;
  OpenWallet: (
    walletKey: string,
    password: string,
    fileData: any, // Uint8Array
    online: boolean
  ) => DeroWasmWalletResponse;

  RecoverWalletFromSeed: (
    password: string,
    seed: string
  ) => DeroWasmWalletResponse;
  RecoverWalletFromHexSeed: (
    password: string,
    hexSeed: string
  ) => DeroWasmWalletResponse;
  RecoverWalletFromDisk: (
    password: string,
    fileData: string
  ) => DeroWasmWalletResponse;
  WalletGetEncryptedData: (walletKey: string) => DeroWasmWalletResponse;
  WalletGetTopoHeight: (walletKey: string) => DeroWasmWalletResponse;
  WalletGetAddress: (walletKey: string) => DeroWasmWalletResponse;
  WalletGetBalance: (
    asyncKey: string,
    walletKey: string,
    scId: string
  ) => DeroWasmWalletResponse;
  WalletGetSeed: (walletKey: string) => DeroWasmWalletResponse;
  WalletGetHexSeed: (walletKey: string) => DeroWasmWalletResponse;
  WalletIsRegistered: (walletKey: string) => DeroWasmWalletResponse;
  WalletTransfer: (
    asyncKey: string,
    walletKey: string,
    data: string
  ) => DeroWasmWalletResponse;
  WalletGetTransfers: (
    walletKey: string,
    coinbase: boolean
  ) => DeroWasmWalletResponse;
  WalletSendTransaction: (
    asyncKey: string,
    walletKey: string,
    txHex: string
  ) => DeroWasmWalletResponse;
  WalletRegister: (
    walletKey: string,
    targetLeadingZero: number
  ) => DeroWasmWalletResponse; // registration is slow - difficulty to high for browser

  Initialize: (env: string, daemonEndpoint: string) => DeroWasmWalletResponse;
  DecodeHexTransaction: (txHex: string) => DeroWasmWalletResponse;
  VerifyAddress: (addrString: string) => DeroWasmWalletResponse;
  CheckSeed: (seed: string) => DeroWasmWalletResponse;
  DaemonSetAddress: (
    asyncKey: string,
    daemonEndpoint: string
  ) => DeroWasmWalletResponseNull;
  DaemonCall: (
    asyncKey: string,
    method: string,
    data: string
  ) => DeroWasmWalletResponse;

  DaemonGetTopoHeight: () => DeroWasmWalletResponse;
  FastRegister: (workerKey: string) => DeroWasmWalletResponse; // fast register by pieswap*!/*/

  /// Async Keys holding results from method wrappers
  'DERO.GetBlock'?: any;
  DeroWasmWalletGetBalance: any;
}

export interface FastRegResI {
  busy: boolean;
  hr?: number; //hashrate
  c?: number; //count
  txId?: string;
  txHex?: string;
  addr?: string;
  wordSeed?: string;
  hexSeed?: string;
}
