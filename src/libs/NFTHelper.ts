import { appEnv } from "../constants/env";
import { uiStore } from "../store/UI.store";
import { INFTToken } from "../types/token.types";
import { MoralisChains } from "../types/user.types";

export const getNFTTokenIds = async (Web3API: any): Promise<INFTToken[]> => {
  uiStore.toggleIsLoading();
  const response = await Web3API.token.getAllTokenIds({
    address: appEnv.nft.contractAddress!,
    chain: appEnv.currentChain as MoralisChains,
  });
  uiStore.toggleIsLoading();

  return response.result as unknown as INFTToken[];
};
