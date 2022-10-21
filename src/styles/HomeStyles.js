import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  background-color: #2B292C;
  margin: 0;
  padding: 0;
  
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 1em;
  transition: box-shadow .3s;
  border: 1px solid #EC9700;
  &:hover {
    box-shadow: 0 0 8px 8px rgba(236, 151, 0,.5); 
  }

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(300)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const StyledPokemonName = styled.h3`
  color: #333;
  font-size: 3rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;



export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`
