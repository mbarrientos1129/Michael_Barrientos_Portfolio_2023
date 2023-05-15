import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: michael.barrientos1129@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/mbarrientos1129",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/michael-barrientos-a18089205/",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/17432993/michael-barrientos",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={10}>
              {socials.map(({icon, url}) => (
                <a key={url} href={url} icon={icon} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon key={url} icon={icon} size="2x"/>
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="#contactme-section"
                onClick={() => handleClick("contactme-section")}>
                Contact Me
              </a>
              <a
                href="#projects-section"
                onClick={() => handleClick("projects-section")}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
