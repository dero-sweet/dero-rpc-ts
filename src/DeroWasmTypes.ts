//@ts-ignore
export const DeroWasmWindow: DeroWasmWindowI = window;
export interface WalletResponse {
  value: any;
  err: any;
}

export interface DeroWasmWalletResponseNull {
  value: null;
  err: null;
}

//@ts-ignore
// in index.tsx export const DeroWasmWindow: DeroWasmWindowI = window

export interface DeroWasmWindowI {
  // Methods exposed in g45 # Dero Wallet WASM
  CreateNewWallet: (password: string) => WalletResponse;
  CloseWallet: (walletKey: string) => WalletResponse;
  CloseAllWallets: () => WalletResponse;
  OpenWallet: (
    walletKey: string,
    password: string,
    fileData: any, // Uint8Array
    online: boolean
  ) => WalletResponse;
  RecoverWalletFromSeed: (password: string, seed: string) => WalletResponse;
  RecoverWalletFromHexSeed: (
    password: string,
    hexSeed: string
  ) => WalletResponse;
  RecoverWalletFromDisk: (password: string, fileData: string) => WalletResponse;
  WalletGetEncryptedData: (walletKey: string) => WalletResponse;
  WalletGetTopoHeight: (walletKey: string) => WalletResponse;
  WalletGetAddress: (walletKey: string) => WalletResponse;
  WalletGetBalance: (
    asyncKey: string,
    walletKey: string,
    scId: string
  ) => WalletResponse;
  WalletGetSeed: (walletKey: string) => WalletResponse;
  WalletGetHexSeed: (walletKey: string) => WalletResponse;
  WalletIsRegistered: (walletKey: string) => WalletResponse;
  WalletTransfer: (
    asyncKey: string,
    walletKey: string,
    data: string
  ) => WalletResponse;
  WalletGetTransfers: (walletKey: string, coinbase: boolean) => WalletResponse;
  WalletSendTransaction: (
    asyncKey: string,
    walletKey: string,
    txHex: string
  ) => WalletResponse;
  WalletRegister: (
    walletKey: string,
    targetLeadingZero: number
  ) => WalletResponse; // registration is slow - difficulty to high for browser
  //
  // daemon node
  //
  Initialize: (env: string, daemonEndpoint: string) => WalletResponse;
  DecodeHexTransaction: (txHex: string) => WalletResponse;
  VerifyAddress: (addrString: string) => WalletResponse;
  CheckSeed: (seed: string) => WalletResponse;
  DaemonSetAddress: (
    asyncKey: string,
    daemonEndpoint: string
  ) => WalletResponse;
  DaemonCall: (
    asyncKey: string,
    method: string,
    data: string
  ) => WalletResponse;
  DaemonGetTopoHeight: () => WalletResponse;
  FastRegister: (workerKey: string) => WalletResponse; // fast register by pieswap*!/*/

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
