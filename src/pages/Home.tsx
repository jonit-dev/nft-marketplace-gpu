import React from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

interface IProps {}

export const Home: React.FC<IProps> = (props) => {
  return (
    <Container>
      <div>
        <Header />
        <section className="container">
          <div className="columns features">
            <Card
              title="lorem"
              imagePath="https://source.unsplash.com/6Ticnhs1AG0"
            >
              <p>
                Ut venenatis tellus in metus vulputate. Amet consectetur
                adipiscing elit pellentesque. Sed arcu non odio euismod lacinia
                at quis risus. Faucibus turpis in eu mi bibendum neque egestas
                cmonsu songue. Phasellus vestibulum lorem sed risus.
              </p>
              <span
                className="button is-link modal-button"
                data-target="modal-card"
              >
                Modal Card
              </span>
            </Card>
            <Card
              title="lorem"
              imagePath="https://source.unsplash.com/6Ticnhs1AG0"
            >
              <p>
                Ut venenatis tellus in metus vulputate. Amet consectetur
                adipiscing elit pellentesque. Sed arcu non odio euismod lacinia
                at quis risus. Faucibus turpis in eu mi bibendum neque egestas
                cmonsu songue. Phasellus vestibulum lorem sed risus.
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
        </section>
        <footer>
          <div className="content has-text-centered">
            <div className="control level-item">
              <a href="https://github.com/BulmaTemplates/bulma-templates">
                <div className="tags has-addons">
                  <span className="tag is-dark">Bulma Templates</span>
                  <span className="tag is-info">MIT license</span>
                </div>
              </a>
            </div>
          </div>
        </footer>
       </div>
    </Container>
  );
};

const Container = styled.div``;
