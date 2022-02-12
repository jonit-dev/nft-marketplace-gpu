import React from "react";
import { useMoralis } from "react-moralis";
import styled from "styled-components";
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";

export const Header: React.FC = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  return (
    <Container>
      <LoginContainer>
        {!isAuthenticated ? <Login authenticate={authenticate} /> : <Logout />}
      </LoginContainer>
      <section className="hero is-info is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">GPU NFT Marketplace</p>
            <p className="subtitle">Buy here!</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  z-index: 999;
`;
