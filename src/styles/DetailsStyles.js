import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Wrapper = styled.div`
  text-align: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  background-color: ${(props) => props.bgColor};
  margin: 0;
  padding: 0;
  height: 100vh;
`;

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${px2vw(15)};
`;

export const ChartWrapper = styled.div`
  justify-content: center;
  margin-top: ${px2vw(32)};
  padding: 0 ${px2vw(300)};
`;

export const StatType = styled.span`
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
  text-transform: uppercase;
  padding: 4px 8px;
  text-align: center;
  border-radius: 5px;
`;

export const StatValue = styled.h4`
  color: white;
`;
