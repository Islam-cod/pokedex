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
  position: relative;
`;

export const DetailsContainer = styled.div`
border: 3px solid #333;
border-radius: 1em;
background-color: rgba(255, 255, 255, 0.1);
box-shadow: 0 0 8px 8px rgba(51,51,51,0.2); 
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 75%;
`

export const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: ${px2vw(15)};
`;

export const ChartWrapper = styled.div`
  justify-content: center;
  padding: 0 ${px2vw(100)};
  margin-bottom: 10px;
`;

export const StatType = styled.span`
  background-color: #ffc107;
  border-color: #ffc107;
  color: #212529;
  text-transform: uppercase;
  padding: 4px 25px;
  text-align: center;
  border-radius: 20px;
`;

export const StatValue = styled.h4`
  color: white;
`;
