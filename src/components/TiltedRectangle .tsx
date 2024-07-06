import React from "react";
import { Box } from "@chakra-ui/react";
import Circle from "./Circle";

const TiltedRectangle = () => {
  return (
    <Box
    position="absolute"
    top={0}
    left={"72vw"}
    width="800px"
    height="874.44px"
    bgGradient="linear(to-b, rgba(1, 153, 102, 0.37), rgba(9, 80, 115, 0))"
    transform="rotate(30deg)"
    transformOrigin="top right"
    overflow="clip"
    zIndex={1}
  />
  
   
  );
};

export default TiltedRectangle;
