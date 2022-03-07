import { useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getNFTTokenIds } from "./libs/NFTHelper";
import { Home } from "./pages/Home";
import { nftStore } from "./store/NFT.store";

function App() {
  const Web3Api = useMoralisWeb3Api();
  const { isInitialized } = useMoralis();

  useEffect(() => {
    // start by pulling NFT contract data.

    if (isInitialized) {
      (async () => {
        const nftTokens = await getNFTTokenIds(Web3Api);

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
