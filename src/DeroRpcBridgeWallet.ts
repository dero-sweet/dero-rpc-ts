// @ts-ignore
import DeroBridgeApi from 'dero-rpc-bridge-api';
import * as DeroWalletRpcTypes from './DeroRpcWalletTypes';
import { Transfer } from './DeroRpcWalletTypes';
import * as DeroRpc from './DeroRpcBridge';
import { GetRandomAddress } from './DeroRpcBridge';
import * as DeroRpcTypes from './DeroRpcTypes';
import { DataTypes } from './DeroRpcTypes';
import * as DeroBridgeWallet from './DeroRpcBridgeWallet';

export interface GasErrorI {
  code: number;
  message: string;
}

export const Echo = async (api: DeroBridgeApi) => {
  try {
    const res = (await api.wallet('echo'), ['Hello', 'World', '!']);
    //  .data
    //   .result
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const GetAddress = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.GetAddress_Params
) => {
  try {
    const res: DeroWalletRpcTypes.GetAddress_Result = (
      await api.wallet('get-address', params)
    ).data.result;
    //  console.log(res)
    return res;
  } catch (err) {
    //console.log(err)
  }
};

export const GetBalance = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.GetBalance_Params
) => {
  try {
    const res: DeroWalletRpcTypes.GetBalance_Result = (
      await api.wallet('get-balance', params)
    ).data.result;
    // console.log("GetBalance", res)
    return res;
  } catch (err) {
    // console.log(err)
  }
};

export const GetHeight = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.GetHeight_Params
) => {
  if (!api.initialized) return;
  try {
    const res: DeroWalletRpcTypes.GetHeight_Result = (
      await api.wallet('get-height', params)
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    // console.log(err)
  }
};

export const GetTransferByTXID = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.Get_Transfer_By_TXID_Params
) => {
  try {
    const res: DeroWalletRpcTypes.Get_Transfer_By_TXID_Result = (
      await api.wallet('get-transfer-by-txid', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

//todo the wallet call it not working.

export const GetTransfers = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.Get_Transfers_Params
) => {
  try {
    //todo fix
    const res: DeroWalletRpcTypes.Get_Transfers_Result = (
      await api.wallet('get-transfers', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const MakeIntegratedAddress = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.Make_Integrated_Address_Params
) => {
  try {
    const res: DeroWalletRpcTypes.Make_Integrated_Address_Result = (
      await api.wallet('make-integrated-address', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const SplitIntegratedAddress = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.Split_Integrated_Address_Params
) => {
  try {
    const res: DeroWalletRpcTypes.Split_Integrated_Address_Result = (
      await api.wallet('split-integrated-address', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const QueryKey = async (api: DeroBridgeApi) => {
  try {
    const params: DeroWalletRpcTypes.Query_Key_Params = {
      key_type: 'mnemonic',
    };
    // todo fix wallet method name
    const res: DeroWalletRpcTypes.Query_Key_Result = (
      await api.wallet('QueryKey', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const Transfer1 = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.Transfer
) => {
  try {
    // todo fix wallet method name
    const res: DeroWalletRpcTypes.Transfer_Result = (
      await api.wallet('transfer', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const Transfer2 = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.Transfer_Params
) => {
  try {
    // todo fix wallet method name
    const res: DeroWalletRpcTypes.Transfer_Result = (
      await api.wallet('transfer', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const TransferAsset = async (api: DeroBridgeApi, params: any) => {
  try {
    // todo fix wallet method name
    //DeroWalletRpcTypes.Transfer_Result
    const res: any = await api.wallet('start-transfer', params);
    //  .data
    //   .result
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

//todo not implemented by the bridge . move to rpc wallet calls
export const ScInvoke = async (
  api: DeroBridgeApi,
  params: DeroWalletRpcTypes.SC_Invoke_Params
) => {
  try {
    // todo fix wallet method name
    const res: DeroWalletRpcTypes.Transfer_Result = (
      await api.wallet('sc-invoke', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// todo refactor the sc building out to be usable by wasm and rpc
export const CallSc = async (
  api: DeroBridgeApi,
  params: {
    scid: string;
    entryPoint?: string;
    sc_rpc: DeroRpcTypes.Argument[];
    transfers: Transfer[];
  },
  test?: boolean
) => {
  const walletAddress = await DeroBridgeWallet.GetAddress(api, {});
  if (!walletAddress) return;
  const raddr = await GetRandomAddress(api, {});
  if (!raddr) return null;
  const sc_rpc: DeroRpcTypes.Argument[] = [
    {
      name: 'entrypoint',
      datatype: DataTypes.DataString,
      value: params.entryPoint,
    },
    {
      name: 'SC_ACTION',
      datatype: DataTypes.DataUint64,
      value: 0,
    },
    {
      name: 'SC_ID',
      datatype: DataTypes.DataHash,
      value: params.scid,
    },
    ...params.sc_rpc,
  ];
  const dataParams = {
    scid: params.scid,
    ringsize: 2,
    sc_rpc,
    // ...(params.transfers && {transfers: params.transfers}),
    transfers: params.transfers,
    signer: walletAddress.address,
  };
  //console.log("DATA PARAMS", dataParams);
  const resGas = await DeroRpc.GetGasEstimate(api, dataParams);
  if (!resGas) return;
  const { gasEstimate, gasError } = resGas;
  if (gasError) {
    throw gasError as GasErrorI;
  }
  //console.log("GAS", gasEstimate)
  if (test) return;

  const txParams = {
    ...dataParams,
    fees: gasEstimate.gasstorage,
  };

  //console.log("txparams", txParams)
  try {
    const res: DeroWalletRpcTypes.Transfer_Result = (
      await api.wallet('start-transfer', txParams)
    ).data.result;
    //  console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
/*

const [err, res] = await to(deroBridgeApi.wallet('start-transfer', {
  ringsize: 2,
  sc_rpc: [
    { name: "SC_ACTION", datatype: "U", value: 0 },
    { name: "SC_ID", datatype: "H", value: "d80bd69e9945251b9a0127f064268d0629e743fa7fffb14ad74dbb366f932291" },
    { name: "entrypoint", datatype: "S", value: "Test" },
    { name: "arg", datatype: "S", value: "the_value" },
  ],
  transfers: [{
    scid: 'd80bd69e9945251b9a0127f064268d0629e743fa7fffb14ad74dbb366f932291',
    destination: 'deto1qyg7mqwag7lch9267dttyrxy5jlc8tqwedtel77kpq0zh2zr7rvlsqgs2cz33',
    amount: 1,
  }]
}))


 */
