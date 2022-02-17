/* eslint-disable */
import * as nearAPI from "near-api-js";
import getConfig from "../config";
import { Contract } from "tenk-nft";
import { NEAR } from "near-units";

export const { networkId, nodeUrl, walletUrl, contractName, contractMethods } =
  getConfig();

export const {
  utils: {
    format: { formatNearAmount, parseNearAmount },
  },
} = nearAPI;

export const formatAccountId = (accountId, len = 16) => {
  if (accountId.length > len) {
    return `${accountId.substr(0, len - 3)}...`;
  }
  return accountId;
};
export const formatAccountIdCenter = (accountId, len = 12) => {
  if (accountId.length > len) {
    return `${accountId.substr(0, len / 2)}......${accountId.substr(
      accountId.length - len / 2,
      accountId.length
    )}`;
  }
  return accountId;
};

export const getWallet = async () => {
  const near = await nearAPI.connect({
    networkId,
    nodeUrl,
    walletUrl,
    deps: { keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore() },
  });
  const wallet = new nearAPI.WalletAccount(near);
  return { near, wallet };
};

export const getContract = (account) => {
  return new Contract(account, contractName);
};

export const getPrice = async (account) => {
  const contract = new Contract(account, contractName);

  let minter = account.accountId ?? "aa.near";

  let [oneNFT, costLinkDrop, tokenLeft] = await Promise.all([
    NEAR.from(await contract.total_cost({ num: 1, minter })),
    NEAR.from(await contract.cost_of_linkdrop({ minter })),
    NEAR.from(await contract.tokens_left({ minter })),
  ]);

  return {
    oneNFT,
    costLinkDrop,
    tokenLeft
  };
};
