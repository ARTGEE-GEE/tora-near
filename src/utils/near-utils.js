/* eslint-disable */
import * as nearAPI from 'near-api-js';
import getConfig from '../config';

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
export const formatAccountIdCenter = (accountId,  len = 12) => {
  if (accountId.length > len) {
    return `${accountId.substr(0, len/2)}......${accountId.substr(accountId.length-len/2, accountId.length)}`;
  }
  return accountId;
}

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

export const getContract = (account, methods = contractMethods) => {
  return new nearAPI.Contract(account, contractName, {
    ...methods,
    sender: account.accountId,
  });
};

export const getPrice = async (near) => {
  const contract = await near.loadContract(contractName, {
    ...contractMethods,
  });

  let minter = "aa.near"
  console.log(contract,'contract')
  let [discount, tenTokenCost, tokenStorage, oneTokenCost, costLinkDrop] = await Promise.all([
    contract.discount({
      num: 10,
      minter
    }),
    contract.total_cost({ num: 10, minter}),
    contract.token_storage_cost(),
    contract.cost_per_token({ num: 1, minter}),
    contract.cost_of_linkdrop({minter}),
  ]);
  
  console.log(discount)
  const discountFormat = formatNearAmount(discount);
  const tenTokenFormat = formatNearAmount(tenTokenCost);
  const oneTokenFormat = formatNearAmount(oneTokenCost);
  const tokenStorageFormat = formatNearAmount(tokenStorage);

  const price = {
    oneNFT: oneTokenFormat - tokenStorageFormat,
    manyNFTS: tenTokenFormat - 10 * tokenStorageFormat,
    tokenStorageFormat,
    discountFormat,
    tenTokenCost,
    oneTokenCost,
    costLinkDrop: costLinkDrop,
  };

  return price;
};
