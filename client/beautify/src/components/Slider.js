import React from "react";
import Carousel from "./Carousel";
import Slide from "./Slide";
import { createGlobalStyle, default as styled } from "styled-components";
import img1 from "../img/1.png";
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

function Slider() {
  return (
    <Wrapper>
      <Global />
      <Carousel>
        {[...Array(10)].map((q, index) => {
          return <Slide key={index + 1} >
          
         <a href="./href"><img src={img1} alt="services" className="serviceImg"></img></a> 
       
            
         </Slide>;
        })}
      </Carousel>
    </Wrapper>
  );
}

export default Slider;
