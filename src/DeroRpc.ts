//
// DeroSweet
//

// @ts-ignore
import DeroBridgeApi from 'dero-rpc-bridge-api';

import * as DeroRpcTypes from './DeroRpcTypes';
import { DeroRpcCall, RpcConnectionDetails } from './DeroRpcUtils';

export const DeroRpcEcho = async (
  node: RpcConnectionDetails,
  params: string[]
) => {
  try {
    const res: string = (
      await DeroRpcCall({
        node,
        method: 'DERO.Echo',
        params,
      })
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.error('Echo', err);
  }
};

export const DeroRpcPing = async (node: RpcConnectionDetails) => {
  try {
    const res: string = (
      await DeroRpcCall({
        node,
        method: 'DERO.Ping',
      })
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.error('GetBlock', err);
  }
};

export const DeroRpcGetInfo = async (node: RpcConnectionDetails) => {
  try {
    const res: DeroRpcTypes.GetInfo_Result = (
      await DeroRpcCall({
        node,
        method: 'DERO.GetInfo',
      })
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.error('GetBlock', err);
  }
};

export const DeroRpcGetBlock = async (
  node: RpcConnectionDetails,
  params: DeroRpcTypes.GetBlock_Params
) => {
  try {
    const res: DeroRpcTypes.GetBlock_Result = (
      await DeroRpcCall({
        node,
        method: 'DERO.GetBlock',
        params,
      })
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.error('GetBlock', err);
  }
};

export const DeroRpcGetBlockHeaderByTopoHeight = async (
  node: RpcConnectionDetails,
  params: DeroRpcTypes.GetBlockHeaderByTopoHeight_Params
) => {
  try {
    const res: DeroRpcTypes.GetBlockHeaderByHeight_Result = (
      await DeroRpcCall({
        node,
        method: 'DERO.GetBlockHeaderByTopoHeight',
        params,
      })
    ).data.result;
    // console.log(res)
    return res;
  } catch (err) {
    console.error('GetBlockHeaderByTopoHeight', err);
  }
};
