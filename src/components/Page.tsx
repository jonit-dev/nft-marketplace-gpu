import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

interface IProps {
  children: React.ReactNode;
}

export const Page: React.FC<IProps> = ({ children }) => {
  return (
    <Container>
      <div>
        <Header />
        <section className="container">{children}</section>
        <footer>
          <div className="content has-text-centered">
            <div className="control level-item">
              <a href="https://github.com/BulmaTemplates/bulma-templates">
                <div className="tags has-addons">
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
