import { makeAutoObservable } from "mobx";
import { INFTToken } from "../types/token.types";

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
}

export const nftStore = new NFTStore();
