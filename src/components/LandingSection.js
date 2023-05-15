import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Michael!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar src='https://robohash.org/mail@ashallendesign.co.uk' size={"3xl"}/>
      <Heading as='h2' size='md'>
        {greeting}
      </Heading>
      <Heading as='h2' size='2xl'>
        {bio1}
      </Heading>
      <Heading as='h3' size='xl'>
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
