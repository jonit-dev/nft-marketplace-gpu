import Moralis from "moralis/types";
import React from "react";
import { AuthenticateOptions } from "react-moralis/lib/hooks/core/useMoralis/_useMoralisAuth";
import styled from "styled-components";

interface IProps {
  authenticate: (
    options?: AuthenticateOptions | undefined
  ) => Promise<Moralis.User<Moralis.Attributes> | undefined>;
}

export const Login: React.FC<IProps> = ({ authenticate }) => {
  return (
    <Container onClick={() => authenticate()}>
      <Img src="/images/metamask.png" alt="metamask login" />
      <ButtonText>Login with Metamask</ButtonText>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 5px;
  background-color: white;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  width: 260px;
  -webkit-box-shadow: 6px 4px 13px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 4px 13px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 4px 13px -8px rgba(0, 0, 0, 0.75);

  cursor: pointer;
`;

const Img = styled.img`
  flex: 25%;
  height: 30px;
  object-fit: scale-down;
`;
const ButtonText = styled.span`
  flex: auto;
  font-weight: bold;
  font-size: 0.8rem;
`;
