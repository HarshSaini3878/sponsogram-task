"use client"
import React from "react";
import { Box } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import './Footer.css'
const Footer = () => {
  return (
    <div className="w-screen min-h-[25rem] flex items-center justify-center bg-customDarkGreen text-white">
      <div className="foot h-auto w-[80%] flex items-center justify-between flex-wrap gap-10">
        <div className="address flex flex-col w-[40%] items-center justify-center gap-6 ">
          <div className="h-[40%] w-[100%]text-left text-2xl font-bold">
            8th Floor, Department of Computer Science, Delhi Technological
            University, Delhi, India
          </div>
          <div className="w-full h-[4%]">(434) 546-4356</div>
          <div className="w-full h-[4%]">contact@lift.agency</div>
        </div>
        <div className="pages  flex flex-col gap-8  ">
          <div className="h-[80%] flex items-center justify-between ">
            <div>
              <ul className="list-none">
                <li>About</li>
                <li>Growers</li>
                <li>Merchants</li>
                <li>Partners</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li>About</li>
                <li>Growers</li>
                <li>Merchants</li>
                <li>Partners</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="w-full text-center h-[8%]">
            © 2020 Sponsogram Media. All rights reserved.
          </div>
        </div>
        <div className="goToTop flex items-center justify-center ">
          <Box
            width="70px"
            height="70px"
            className="bg-customGreen"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            color="black"
            fontWeight="bold"
            
            zIndex={2}
          >
            <ArrowUpIcon boxSize={10} color={"White"} />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Footer;
