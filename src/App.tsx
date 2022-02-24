import { useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { appEnv } from "./constants/env";
import { Home } from "./pages/Home";
import { nftStore } from "./store/NFT.store";
import { uiStore } from "./store/UI.store";
import { INFTToken } from "./types/token.types";
import { MoralisChains } from "./types/user.types";

function App() {
  const Web3Api = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();

  useEffect(() => {
    // start by pulling NFT contract data.

    if (isInitialized) {
      (async () => {
        uiStore.toggleIsLoading();
        const response = await Web3Api.token.getAllTokenIds({
          address: appEnv.nft.contractAddress!,
          chain: appEnv.currentChain as MoralisChains,
        });
        uiStore.toggleIsLoading();

        const nftTokens = response.result as unknown as INFTToken[];

        nftStore.updateNftTokens(nftTokens);
      })();
    }
  }, [Web3Api.token, isInitialized]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
