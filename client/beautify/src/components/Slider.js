import React from "react";
import Carousel from "./Carousel";
import Slide from "./Slide";
import { createGlobalStyle, default as styled } from "styled-components";
import img1 from "../img/1.png";
import images from "./images";
const Wrapper = styled.div`

 
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Global = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
    
    .serviceImg{
       margin-top:16px;
        width:235px;
        height:175px;
    }


`;

function imaCall(props){

  return (
   
    <Slide>
     <a href="./href"><img src={props.src} alt="services" className="serviceImg"></img></a> 
     </Slide>
    
  )
}
function Slider() {
  return (
    <Wrapper>
      <Global />
      <Carousel>
      {images.map(imaCall)}
      </Carousel>
    </Wrapper>
  );
}

export default Slider;
