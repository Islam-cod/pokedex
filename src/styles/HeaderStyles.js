import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const HeaderContainer = styled.div`
display: flex;
justify-content: center;
padding-bottom: ${px2vw(32)};
background-color: #ffa500`

export const Title = styled.h1`
margin-top: ${px2vw(30)};
text-transform: uppercase;
color: black;
transition: color .2s;
&:hover {
    color: #333; 
  }

`