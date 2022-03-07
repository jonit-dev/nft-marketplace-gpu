import { makeAutoObservable } from "mobx";
import { appEnv } from "../constants/env";
import { INFTToken } from "../types/token.types";
import { MoralisChains } from "../types/user.types";
import { uiStore } from "./UI.store";

class NFTStore {
  public nftTokens: INFTToken[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public async updateNftTokens(nftTokens: INFTToken[]) {
    this.nftTokens = nftTokens.map((token) => {
      token.metadata = JSON.parse(token.metadata as unknown as string);

      return token;
    });
  }

  public async getNFTTokenIds(Web3API: any): Promise<INFTToken[]> {
    uiStore.toggleIsLoading();
    const response = await Web3API.token.getAllTokenIds({
      address: appEnv.nft.contractAddress!,
      chain: appEnv.currentChain as MoralisChains,
    });
    uiStore.toggleIsLoading();

    return response.result as unknown as INFTToken[];
  }

  public async getTokenIdOwners(
    tokenId: string,
    Web3API: any
  ): Promise<string[]> {
    uiStore.toggleIsLoading();
    const response = await Web3API.token.getTokenIdOwners();
    uiStore.toggleIsLoading();

    return response.result as unknown as string[];
  }
}

export const nftStore = new NFTStore();
