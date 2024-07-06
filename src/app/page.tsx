"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Carousel from '@/components/Carousel'
import "./style.css";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="main border-2 overflow-clip ">
        <div className="w-screen h-screen section1 flex">
          <div className="content1 w-[55%]    ">
            <div className="content1-1 flex flex-col items-start justify-evenly ">
              <div className=" text-blue-950 text-6xl font-bold">
                Lets{" "}
                <span className="text-green-400">
                  {" "}
                  Connect Collaborate Sponsor
                </span>{" "}
                with Sponsogram!
              </div>
              <div className=" text-3xl font-medium ">
                Sponsogram connect provides an effective and powerful way to
                connect sponsors with diverse sponsorship opportunities.
              </div>
              <div className="flex relative buttons1">
                <Button
                  width="240.96px"
                  height="70px"
                  borderRadius="50px"
                  bgGradient="linear(to-r, rgba(7, 146, 88, 1), rgba(30, 76, 110, 1))"
                  color="white"
                  _hover={{
                    bgGradient:
                      "linear(to-r, rgba(7, 146, 88, 0.8), rgba(30, 76, 110, 0.8))",
                  }}
                >
                  Get Started
                </Button>
                <Box
                  width="70px"
                  height="70px"
                  bgColor={"rgba(251, 249, 241, 1)"}
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  color="black"
                  fontWeight="bold"
                  className="transform -rotate-45 button-box-1 "
                  zIndex={2}
                  position="absolute"
                  left="calc(100% - 35px)" // Adjusted position to align with the right edge of the button
                >
                  <ArrowForwardIcon boxSize={10} />
                </Box>
              </div>
            </div>
          </div>
          <div className="Img1 w-[45%]  flex items-center">
            <Image
              src="/images/sponsor-bro.png"
              alt="Description of the image"
              width={620}
              height={393}
              layout="intrinsic"
            />
          </div>
        </div>
        <div className="w-screen h-screen section-2 ">
          <div className="content2 ">
            <div className="h-[40%] flex justify-around  flex-col ">
              <div className="text-6xl text-blue-950 font-extrabold ">
                How it works?
              </div>
              <div className="text-3xl ">
                Sponsogram connect provides an effective and powerful way to
                connect sponsors with diverse sponsorship opportunities.
              </div>
            </div>
            <div className="h-[60%] flex items-center justify-center">
              <div>
                <Image
                  src="/images/section2-main.png"
                  alt="Description of the image"
                  width={500}
                  height={400}
                  layout="filled"
                />
              </div>
            </div>
          </div>
          <div className="List   flex flex-col items-center justify-around">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-around gap-10"
              >
                <div className="w-32 h-24 rounded-lg bg-customGreen flex items-center justify-center">
                  <div className="w-[50%] h-[50%]">
                    <Image
                      src={item.imageUrl}
                      alt="Description of the image"
                      width={3}
                      height={3}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl font-semibold">
                    {item.mainHeading}
                  </div>
                  <div className=" font-light">{item.subHeading}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel hidden"><Carousel/></div>
        </div>

        <div className="w-screen h-screen section3">
          <div className="section31 text-6xl font-bold text-blue-950">
            What do you get?
          </div>
          <div className="section32 flex items-center justify-center">
            <div className="w-[70%] h-[70%] flex items-center justify-center">
              <Image
                src="/images/section31.png"
                alt="Description of the image"
                width={620}
                height={393}
                layout="responsive"
              />
            </div>
          </div>
          <div className="section33 flex flex-col items-start justify-between">
            <div className="text-3xl font-semibold ">Data Analytics</div>
            <div className="text-xl">
              Here you can handle projects together with team virtually
            </div>
          </div>
          <div className="section34 text-xl">
            We offer a variety of interesting features that you can help
            increase yor productivity at work and manage your project easily.
          </div>
          <div className="section35 flex items-center justify-center">
            <div className="w-[70%] h-[70%] flex items-center justify-center">
              <Image
                src="/images/section32.png"
                alt="Description of the image"
                width={620}
                height={393}
                layout="responsive"
              />
            </div>
          </div>
          <div className="section36 flex flex-col items-start justify-between">
            <div className="text-3xl font-semibold ">Security and Privacy</div>
            <div className="text-xl">
              No nedd to worry about storage because we provide storage up to 2
              TB
            </div>
          </div>
          <div className="section37 flex relative items-center justify-center ">
            <Button
              width="240.96px"
              height="70px"
              borderRadius="50px"
              bgGradient="linear(to-r, rgba(7, 146, 88, 1), rgba(30, 76, 110, 1))"
              color="white"
              _hover={{
                bgGradient:
                  "linear(to-r, rgba(7, 146, 88, 0.8), rgba(30, 76, 110, 0.8))",
              }}
            >
              Get Started
            </Button>
            <Box
              width="70px"
              height="70px"
              bgColor={"rgba(251, 249, 241, 1)"}
              borderRadius="50%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="black"
              fontWeight="bold"
              className="transform -rotate-45"
              zIndex={2}
              position="absolute"
              left="calc(50% + 80.48px)" // Adjusted position to align with the button
            >
              <ArrowForwardIcon boxSize={10} />
            </Box>
          </div>
          <div className="section38 flex items-center justify-center">
            <div className="w-[70%] h-[70%] flex items-center justify-center">
              <Image
                src="/images/section33.png"
                alt="Description of the image"
                width={620}
                height={393}
                layout="responsive"
              />
            </div>
          </div>
          <div className="section39 flex flex-col items-start justify-between">
            <div className="text-3xl font-semibold ">Personal Assistance</div>
            <div className="text-xl">
              We always provide useful informatin to make it easier for you
              every day
            </div>
          </div>
        </div>
        <div className="w-screen h-screen    flex flex-col items-center justify-center">
          <div className="h-[25%] w-[50%] font-bold text-center text-6xl flex items-center justify-center text-blue-950">
            <div>
              Connecting Sponsors with{" "}
              <span className="text-customGreen font-kalam curved-underline">
                Opportunities
              </span>
            </div>
          </div>
          <div className="h-[75%] w-[80%] flex items-center relative justify-center">
            <div className="relative h-[450px] w-[650px]">
              <Image
                src="/images/Section4-shape.png"
                alt="Description of the shape image"
                width={650}
                height={450}
                layout="intrinsic"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/Section4-boy.png"
                  alt="Description of the boy image"
                  width={250}
                  height={150}
                  layout="intrinsic"
                />
              </div>
              <div className="cards absolute top-[-2rem] left-[5%] transform -translate-x-1/2 w-48 h-60 rounded-md text-black flex items-center justify-center">
                <div className="w-[85%] h-[70%] font-semibold">
                  Our platform provides an easy and effective way for sponsors
                  to find diverse sponsorship opportunities.
                </div>
              </div>
              <div className="cards absolute top-[70%] right-[-3rem] transform -translate-y-1/2 w-48 h-60 rounded-md text-black flex items-center justify-center">
                <div className="w-[85%] h-[70%] font-semibold">
                  Our platform provides an easy and effective way for sponsors
                  to find diverse sponsorship opportunities.
                </div>
              </div>
              <div className="cards absolute bottom-[-6rem] left-[40%] transform -translate-x-1/2 w-48 h-60 rounded-md text-black flex items-center justify-center z-10">
                <div className="w-[85%] h-[70%] font-semibold">
                  Our platform provides an easy and effective way for sponsors
                  to find diverse sponsorship opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen flex items-center justify-center">
          <div className="w-[85%] h-[70%] flex items-center justify-center">
            <div className="Img-section5  w-[40%] h-[100%]">
            <Image
                src="/images/section5.png"
                alt="Description of the image"
                width={500}
                height={500}
                layout="intrinsic"
              />
            </div>
            <div className="content5  w-[60%]  h-[100%] text-right flex items-center flex-col justify-between">
              <div className="text-6xl font-bold text-blue-950">
              Get ready <br />to <span className="font-kalam text-customGreen">Maximize</span> you Sponsorship opportunities <br />
               with Sponsogram
              </div>
              <div className="flex w-full justify-end">
      <div className="relative flex items-center">
        <Button
          width="240.96px"
          height="70px"
          borderRadius="50px"
          bgGradient="linear(to-r, rgba(7, 146, 88, 1), rgba(30, 76, 110, 1))"
          color="white"
          _hover={{
            bgGradient:
              "linear(to-r, rgba(7, 146, 88, 0.8), rgba(30, 76, 110, 0.8))",
          }}
        >
          Get Started
        </Button>
        <Box
          width="70px"
          height="70px"
          bgColor="rgba(251, 249, 241, 1)"
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          color="black"
          fontWeight="bold"
          className="transform -rotate-45"
          zIndex={2}
          position="absolute"
          left="calc(100% - 35px)" // Adjusted position to align with the button
        >
          <ArrowForwardIcon boxSize={10} />
        </Box>
      </div>
    </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

// <----------section 2 data------------------------------------->
const data = [
  {
    imageUrl: "/images/Discover.png",
    mainHeading: "Discovery",
    subHeading:
      "We meet with you to learn about your business, your goals, and your target audience.",
  },
  {
    imageUrl: "/images/Strategy.png",
    mainHeading: "Strategy",
    subHeading:
      "We develop a customized marketing strategy that is based on your unique needs and goals.",
  },
  {
    imageUrl: "/images/execute.png",
    mainHeading: "Execution",
    subHeading:
      "We execute our strategy using the latest digital marketing tools and techniques.",
  },
  {
    imageUrl: "/images/measure.png",
    mainHeading: "Measurement",
    subHeading:
      "We track the results of our campaigns so that we can make adjustments as needed.",
  },
];
