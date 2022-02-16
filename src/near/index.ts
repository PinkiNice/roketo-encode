import { NEAR_CONFIG } from "./config";
import { connect, keyStores } from "near-api-js";

export async function createNearInstance() {
  const keyStore = new keyStores.BrowserLocalStorageKeyStore();
  const near = await connect({
    nodeUrl: NEAR_CONFIG.nodeUrl,
    walletUrl: NEAR_CONFIG.walletUrl,
    networkId: NEAR_CONFIG.networkId,
    keyStore,
    headers: {},
  });

  // здесь  скорее всего contractName прокидывается
  // _near.walletConnection = new nearAPI.WalletConnection(near, "roketo");

  return near;
}
