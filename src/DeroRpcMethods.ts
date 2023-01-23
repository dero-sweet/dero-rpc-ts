//
// DeroSweet
//

// @ts-ignore
import DeroBridgeApi from 'dero-rpc-bridge-api';

import * as DeroRpcTypes from './DeroRpcTypes';
import { DeroRpcCall, RpcConnectionDetails } from './DeroRpcUtils';

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
