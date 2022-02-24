import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Page } from "../components/Page";

interface IProps {}

export const Home: React.FC<IProps> = (props) => {
  return (
    <Page>
      <div className="columns features">
        <Card title="lorem" imagePath="https://source.unsplash.com/6Ticnhs1AG0">
          <p>
            Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing
            elit pellentesque. Sed arcu non odio euismod lacinia at quis risus.
            Faucibus turpis in eu mi bibendum neque egestas cmonsu songue.
            Phasellus vestibulum lorem sed risus.
          </p>
          <span
            className="button is-link modal-button"
            data-target="modal-card"
          >
            Modal Card
          </span>
        </Card>
        <Card title="lorem" imagePath="https://source.unsplash.com/6Ticnhs1AG0">
          <p>
            Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing
            elit pellentesque. Sed arcu non odio euismod lacinia at quis risus.
            Faucibus turpis in eu mi bibendum neque egestas cmonsu songue.
            Phasellus vestibulum lorem sed risus.
          </p>
          <span
            className="button is-link modal-button"
            data-target="modal-card"
          >
            Modal Card
          </span>
        </Card>
      </div>
      <div className="columns features"></div>
    </Page>
  );
};

const Container = styled.div``;
