import * as DeroRpcTypes from './DeroRpcTypes';
export interface Entry {
  height: number;
  topoheight: number;
  blockhash: string;
  minerreward: number;
  tpos: number;
  pos: number;
  coinbase: boolean;
  incoming: boolean;
  txid: string;
  destination: string;
  burn?: number;
  amount: number;
  fees: number;
  proof: string;
  status: string; //byte
  time: string;
  ewdata: string;
  data: string;
  payloadtype: string; //byte
  payload: string;
  payloaderror?: string;
  payload_rpc?: DeroRpcTypes.Argument[];
  sender: string;
  dstport: number;
  srcport: number;
}

export interface GetBalance_Params {
  scid?: string; //any;//crypto.Hash;
}

export interface GetBalance_Result {
  balance: number;
  unlocked_balance: number;
}

export interface GetAddress_Params {}

export interface GetAddress_Result {
  address: string;
}

export interface GetHeight_Params {}

export interface GetHeight_Result {
  height: number;
}

export interface Transfer {
  scid: any; //crypto.Hash;
  destination: string;
  amount?: number;
  burn?: number;
  payload_rpc?: DeroRpcTypes.Argument[];
}

export interface Transfer_Params {
  transfers: Transfer[];
  sc?: string;
  sc_value?: number;
  scid: string;
  sc_rpc?: DeroRpcTypes.Argument[];
  ringsize: number;
  fees: number;
  signer: string;
}

export interface Transfer_Result {
  txid?: string;
}

export interface SC_Invoke_Params {
  scid: string;
  sc_rpc: DeroRpcTypes.Argument[];
  sc_dero_deposit?: number;
  sc_token_deposit?: number;
  ringsize?: number;
}

export interface Get_Transfers_Params {
  scid?: any; //crypto.Hash;
  coinbase?: boolean;
  in?: boolean;
  out?: boolean;
  min_height?: number;
  max_height?: number;
  sender?: string;
  receiver?: string;
  dstport?: number;
  srcport?: number;
}

export interface Get_Transfers_Result {
  entries?: Entry[];
}

export interface Get_Bulk_Payments_Params {
  payment_ids: string[];
  min_block_height: number;
}

export interface Get_Bulk_Payments_Result {}

export interface Query_Key_Params {
  key_type: string;
}

export interface Query_Key_Result {
  key: string;
}

export interface Make_Integrated_Address_Params {
  address?: string;
  payload_rpc?: DeroRpcTypes.Argument[];
}

export interface Make_Integrated_Address_Result {
  integrated_address: string;
  payload_rpc: DeroRpcTypes.Argument[];
}

export interface Split_Integrated_Address_Params {
  integrated_address: string;
}

export interface Split_Integrated_Address_Result {
  address: string;
  payload_rpc: DeroRpcTypes.Argument[];
}

export interface Get_Transfer_By_TXID_Params {
  txid: string;
}

export interface Get_Transfer_By_TXID_Result {
  entry?: Entry;
}
