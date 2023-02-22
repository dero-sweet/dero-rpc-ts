const base64 = require('base-64');

export interface RpcConnectionDetails {
  url: string;
  port: number;
}

export interface DeroRpc_Interface {
  method: string;
  params?: any;
  node: RpcConnectionDetails;
}

export const DeroRpcCall = async ({
  node,
  method,
  params,
}: DeroRpc_Interface) => {
  let response;
  const { url, port } = node;
  const body = {
    jsonrpc: '2.0',
    id: '1',
    method,
    ...(params && { params }),
  };
  const start = Date.now();
  let json;
  const username = '';
  const password = '';
  const encoded = base64.encode(username + ':' + password);
  const authString = 'Basic ' + encoded;
  // console.log(encoded, authString)
  try {
    response = await fetch(`http://${url}:${port}/json_rpc`, {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        //credentials: 'include',
        //'Authorization': authString,  //Authorization: "Basic ...==",
      },
      method: 'POST',
    });
  } catch (error) {
    console.log(error);
  }
  console.log(
    `daemon @ ${url}:${port} json_rpc: ${method} [${Date.now() - start} ms]`
  );
  if (response?.status === 200) {
    // console.log("ok");
    //console.log(response)
    if (response?.json) {
      try {
        json = await response.json();
      } catch (err) {
        console.log('Error on parsing string', err);
      }
      console.log(json, { showHidden: false, depth: null });
    }
  } else {
    console.log('not ok', response?.statusText);
    //return;
  }
  return json;
};
