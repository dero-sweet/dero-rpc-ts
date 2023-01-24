// @ts-ignore
import DeroBridgeApi from 'dero-rpc-bridge-api';

import * as DeroRpcTypes from './DeroRpcTypes';
import * as DeroBridgeWallet from './DeroRpcBridgeWallet';

export const GetGasEstimate = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GasEstimate_Params
) => {
  const walletAddress = await DeroBridgeWallet.GetAddress(api, {});
  if (!walletAddress) return;

  const gasParams = {
    ...params,
    sc_rpc: [
      ...params.sc_rpc,
      /*{
        "name": "SC_ACTION",
        "datatype": DataTypes.DataUint64,
        "value": 0
      },
      {
        "name": "SC_ID",
        "datatype": DataTypes.DataHash,
        "value": params.scid
      },*/
    ],
    signer: walletAddress.address,
  };
  //console.log("gasParams",gasParams)
  try {
    const res = (await api.daemon('get-gas-estimate', gasParams)).data;
    if (res.error) {
      console.log('GAS ERROR', res.error);
      // return res.error
    }
    const data: DeroRpcTypes.GasEstimate_Result = res.result;
    //  console.log("GET GAS ESTIMATE",data)
    return { gasEstimate: data, gasError: res.error };
  } catch (err) {
    console.error('GetGasEstimate', err);
    throw new Error('Gas Error');
  }
};

export const GetBlock = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetBlock_Params
) => {
  try {
    const res: DeroRpcTypes.GetBlock_Result = (
      await api.daemon('get-block', params)
    ).data.result;
    //console.log(res)
    return res;
  } catch (err) {
    console.error('GetBlock', err);
  }
};

export const GetBlockCount = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetBlockCount_Params
) => {
  try {
    const res: DeroRpcTypes.GetBlockCount_Result = (
      await api.daemon('get-height', params)
    ).data.result;
    //  console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};
//todo fix the method name its broken
export const GetBlockHeaderByHash = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetBlockHeaderByHash_Params
) => {
  try {
    const res: DeroRpcTypes.GetBlockHeaderByHash_Result = (
      await api.daemon('get-block-header-by-hash', params)
    ).data.result;
    console.log(res);
    return res;
  } catch (err) {
    console.log(err);
  }
};
//todo fix the method name its broken
export const GetBlockHeaderByTopoHeight = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetBlockHeaderByTopoHeight_Params
) => {
  try {
    const res: DeroRpcTypes.GetBlockHeaderByHeight_Result = (
      await api.daemon('get-block-header-by-height', params)
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const GetBlockTemplate = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetBlockTemplate_Params
) => {
  try {
    const res: DeroRpcTypes.GetBlockTemplate_Result = (
      await api.daemon('get-block-template', params)
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const GetEncryptedBalance = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetEncryptedBalance_Params
) => {
  try {
    const res: DeroRpcTypes.GetEncryptedBalance_Result = (
      await api.daemon('get-encrypted-balance', params)
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const GetHeight = async (api: DeroBridgeApi) => {
  try {
    const res: DeroRpcTypes.Daemon_GetHeight_Result = (
      await api.daemon('get-height')
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const GetInfo = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetInfo_Params
) => {
  try {
    const res: DeroRpcTypes.GetInfo_Result = (
      await api.daemon('get-info', params)
    ).data.result;
    //console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const GetRandomAddress = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetRandomAddress_Params
) => {
  try {
    const res: DeroRpcTypes.GetRandomAddress_Result = (
      await api.daemon('get-random-address', params)
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const GetSC = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetSC_Params
) => {
  const res: DeroRpcTypes.GetSC_Result = (await api.daemon('get-sc', params))
    .data.result;
  // console.log(res)
  return res;
};

export const GetSCVars = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetSC_Params
) => {
  params.variables = true;
  delete params.keysstring;
  const res: DeroRpcTypes.GetSC_Result = (await api.daemon('get-sc', params))
    .data.result;
  // console.log(res)
  return res;
};

export const GetScCode = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetSC_Params
) => {
  params.variables = true;
  params.code = true;
  delete params.keysstring;
  const res: DeroRpcTypes.GetSC_Result = (await api.daemon('get-sc', params))
    .data.result;
  //console.log(res)
  return res;
};

export const GetTransaction = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetTransaction_Params
) => {
  try {
    const res: DeroRpcTypes.GetTransaction_Result = (
      await api.daemon('get-transaction', params)
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.error('GetTransaction', err);
  }
};

export const GetTxPool = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetTxPool_Params
) => {
  try {
    const res: DeroRpcTypes.GetTxPool_Result = (
      await api.daemon('get-tx-pool', params)
    ).data.result;
    //  console.log(res)
    return res;
  } catch (err) {
    console.error('GetTxPool', err);
  }
};

export const NameToAddress = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.NameToAddress_Params
) => {
  try {
    const res: DeroRpcTypes.NameToAddress_Result = (
      await api.daemon('name-to-address', params)
    ).data.result;
    //console.log(res)
    return res;
  } catch (err) {
    //console.error('NameToAddress', err);
  }
};

export const SendRawTransaction = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.SendRawTransaction_Params
) => {
  try {
    const res: DeroRpcTypes.SendRawTransaction_Result = (
      await api.daemon('send-raw-transaction', params)
    ).data.result;
    //console.log(res)
    return res;
  } catch (err) {
    console.error('SendRawTransaction ', err);
  }
};

export const SubmitBlock = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.SubmitBlock_Params
) => {
  try {
    const res: DeroRpcTypes.SubmitBlock_Result = (
      await api.daemon('submit-block', params)
    ).data.result;
    //console.log(res)
    return res;
  } catch (err) {
    console.error('SubmitBlock ', err);
  }
};

export const GetLastBlockHeader = async (
  api: DeroBridgeApi,
  params: DeroRpcTypes.GetLastBlockHeader_Params
) => {
  try {
    const res: DeroRpcTypes.GetLastBlockHeader_Result = (
      await api.daemon('get-last-block-header', params)
    ).data.result;
    //console.log(res)
    return res;
  } catch (err) {
    console.error('GetLastBlockHeader ', err);
  }
};
