import React from "react";
import styled from "styled-components";

interface IProps {
  imagePath?: string;
  text: string;
}

export const ImageButton: React.FC<IProps> = ({ imagePath, text }) => {
  return (
    <Container>
      {imagePath && <Img src={imagePath} alt={text} />}
      <ButtonText>{text}</ButtonText>
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
  padding-left: 1rem;
  padding-right: 1rem;
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
  margin-left: 0.5rem;
  flex: auto;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  color: #222a68;
`;
