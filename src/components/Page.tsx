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
      </div>
    </Container>
  );
};

const Container = styled.div``;
