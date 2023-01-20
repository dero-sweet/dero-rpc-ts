import * as DeroWalletRpcTypes from './DeroWalletRpcTypes';

export type DataType = string;

export enum DataTypes {
  DataString = 'S',
  DataInt64 = 'I',
  DataUint64 = 'U',
  DataFloat64 = 'F',
  DataHash = 'H', // a 256 bit hash (basically sha256 of 32 bytes long)
  DataAddress = 'A', // dero address represented in 33 bytes
  DataTime = 'T',
}

/*

const (
	DataString  DataType = "S"
	DataInt64            = "I"
	DataUint64           = "U"
	DataFloat64          = "F"
	DataHash             = "H" // a 256 bit hash (basically sha256 of 32 bytes long)
	DataAddress          = "A" // dero address represented in 33 bytes
	DataTime             = "T"
)

 */
export interface Argument {
  name: string;
  datatype: DataTypes;
  value: any;
}

export interface BlockHeader_Print {
  depth: number;
  difficulty: string;
  hash: string;
  height: number;
  topoheight: number;
  major_version: number;
  minor_version: number;
  nonce: number;
  orphan_status: boolean;
  syncblock: boolean;
  sideblock: boolean;
  txcount: number;
  miners: string[];
  reward: number;
  tips: string[];
  timestamp: number;
}

export interface GetBlockHeaderByTopoHeight_Params {
  topoheight: number;
}

export interface GetBlockHeaderByHeight_Result {
  block_header: BlockHeader_Print;
  status: string;
}

export interface GetBlockHeaderByHash_Params {
  hash: string;
}

export interface GetBlockHeaderByHash_Result {
  block_header: BlockHeader_Print;
  status: string;
}

export interface GetBlockCount_Params {}

export interface GetBlockCount_Result {
  count: number;
  status: string;
}

export interface GetBlock_Params {
  hash?: string;
  height?: number;
}

export interface GetBlock_Result {
  blob: string;
  json: string;
  block_header: BlockHeader_Print;
  status: string;
}

export interface NameToAddress_Params {
  name: string;
  topoheight?: number;
}

export interface NameToAddress_Result {
  name: string;
  address: string;
  status: string;
}

export interface GetBlockTemplate_Params {
  wallet_address: string;
  block: boolean;
  miner: string;
}

export interface GetBlockTemplate_Result {
  jobid: string;
  blocktemplate_blob?: string;
  blockhashing_blob?: string;
  difficulty: string;
  difficultyuint64: number;
  height: number;
  prev_hash: string;
  epochmilli: number;
  blocks: number;
  miniblocks: number;
  rejected: number;
  lasterror: string;
  status: string;
}

export interface SubmitBlock_Params {
  jobid: string;
  mbl_blob: string;
}

export interface SubmitBlock_Result {
  jobid: string;
  mblid: string;
  blid?: string;
  status: string;
  mini: boolean;
}

export interface GetLastBlockHeader_Params {}

export interface GetLastBlockHeader_Result {
  block_header: BlockHeader_Print;
  status: string;
}

export interface GetEncryptedBalance_Params {
  address: string;
  //todo fix the hash type
  scid: any; //crypto.Hash;
  treehash?: string;
  topoheight?: number;
}

export interface GetEncryptedBalance_Result {
  //todo fix the hash type
  scid: any; //crypto.Hash;
  data: string;
  registration: number;
  bits: number;
  height: number;
  topoheight: number;
  //todo fix the hash type
  blockhash: any; //crypto.Hash;
  treehash: string;
  dheight: number;
  dtopoheight: number;
  dtreehash: string;
  status: string;
}

export interface GetTxPool_Params {}

export interface GetTxPool_Result {
  txs?: string[];
  status: string;
}

export interface Daemon_GetHeight_Result {
  height: number;
  stableheight: number;
  topoheight: number;
  status: string;
}

export interface On_GetBlockHash_Params {
  X: number[];
}

export interface On_GetBlockHash_Result {}

export interface GetTransaction_Params {
  txs_hashes: string[];
  decode_as_json?: number;
}

export interface GetTransaction_Result {
  txs_as_hex: string[];
  txs_as_json?: string[];
  txs: Tx_Related_Info[];
  status: string;
}

export interface Tx_Related_Info {
  as_hex: string;
  as_json?: string;
  block_height: number;
  reward: number;
  ignored: boolean;
  in_pool: boolean;
  output_indices: number[];
  tx_hash: string;
  valid_block: string;
  invalid_block: string[];
  ring: string[][];
  signer: string;
  balance: number;
  code: string;
  balancenow: number;
  codenow: string;
}

export interface GetSC_Params {
  scid: string;
  code?: boolean;
  variables?: boolean;
  topoheight?: number;
  keysuint64?: number[];
  keysstring?: string[];
  keysbytes?: string[];
}

export interface GetSC_Result {
  valuesuint64?: string[];
  valuesstring?: string[];
  valuesbytes?: string[];
  stringkeys?: { [key: string]: any };
  uint64keys?: { [key: number]: any };
  balances?: { [key: string]: number };
  balance: number;
  code: string;
  status: string;
}

export interface GetRandomAddress_Params {
  //todo fix the hash type
  scid?: any; //crypto.Hash;
}

export interface GetRandomAddress_Result {
  address: string[];
  status: string;
}

export interface SendRawTransaction_Params {
  tx_as_hex: string;
}

export interface SendRawTransaction_Result {
  status: string;
  txid: string;
  string: string;
}

export interface GetInfo_Params {}

export interface GetInfo_Result {
  alt_blocks_count: number;
  difficulty: number;
  grey_peerlist_size: number;
  height: number;
  stableheight: number;
  topoheight: number;
  treehash: string;
  averageblocktime50: number;
  incoming_connections_count: number;
  outgoing_connections_count: number;
  target: number;
  target_height: number;
  testnet: boolean;
  network: string;
  top_block_hash: string;
  tx_count: number;
  tx_pool_size: number;
  dynamic_fee_per_kb: number;
  total_supply: number;
  median_block_size: number;
  white_peerlist_size: number;
  version: string;
  connected_miners: number;
  miniblocks_in_memory: number;
  blocks_count: number;
  miniblocks_accepted_count: number;
  miniblocks_rejected_count: number;
  mining_velocity: number;
  uptime: number;
  hashrate_1hr: number;
  hashrate_1d: number;
  hashrate_7d: number;
  status: string;
}

export interface GasEstimate_Result {
  gascompute: number;
  gasstorage: number;
  status: string;
}

export interface GasEstimate_Params {
  transfers: DeroWalletRpcTypes.Transfer[];
  sc?: string;
  sc_value?: number;
  scid: string;
  sc_rpc: Argument[];
  ringsize: number;
  fees?: number;
  signer?: string;
}
