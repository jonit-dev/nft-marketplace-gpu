import { observer } from "mobx-react";
import React from "react";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";
import { Page } from "../components/Page";
import { nftStore } from "../store/NFT.store";
import { uiStore } from "../store/UI.store";

interface IProps {}

export const Home: React.FC<IProps> = observer((props) => {
  const onRenderNFTs = () =>
    nftStore.nftTokens.map((nft) => (
      <Card
        title={nft.metadata.name}
        imagePath={nft.metadata.image}
        key={nft.metadata.name}
      >
        <p>{nft.metadata.description}</p>
        <p>
          <strong>Amount: </strong> {nft.amount}
          <strong>Amount: </strong> {nft.amount}
        </p>
        <span className="button is-link modal-button" data-target="modal-card">
          Buy on OpenSea
        </span>
      </Card>
    ));

  return (
    <Page>
      {uiStore.isLoading && <Loading />}
      <div className="columns features">
        {!uiStore.isLoading && onRenderNFTs()}
      </div>
    </Page>
  );
});
