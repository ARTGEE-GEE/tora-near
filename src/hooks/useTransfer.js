/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable camelcase */
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { appStore } from "../state/app";
import { getContract } from "../utils/near-utils";

const useTransfer = () => {
  const history = useHistory();

  const { state } = useContext(appStore);

  const { account } = state;
  const contract = getContract(account);

  const nftTransfer = async (tokenId, receiver_id) => {
    const token_id = tokenId.toString();
    console.log("transfer");

    await contract.nft_transfer(
      { receiver_id, token_id },
      {
        attachedDeposit: "1",
      }
    );
    history.push("/my-nfts");
  };
  return { nftTransfer };
};

export default useTransfer;
