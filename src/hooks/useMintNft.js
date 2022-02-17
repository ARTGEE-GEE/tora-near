/* eslint-disable no-alert */
import { useContext } from "react";
import { appStore } from "../state/app";
import { getContract } from "../utils/near-utils";
import { NEAR, Gas } from "near-units";

const useMintNft = () => {
  const { state } = useContext(appStore);
  const { account, price } = state;
  const contract = getContract(account);

  const mintNft = async (count = 1) => {
    const walletCallbackUrl = `${window.location.origin}/my-nfts`;
    await contract.nft_mint_many(
      { num: count },
      {
        gas: Gas.parse("30 Tgas").mul(Gas.from(count)),
        attachedDeposit: price.oneNFT.mul(NEAR.from(count)),
        walletCallbackUrl,
      }
    );
  };

  return { mintNft };
};

export default useMintNft;
