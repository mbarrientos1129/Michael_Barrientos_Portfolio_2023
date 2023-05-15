import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    link: " https://python-tech-news-backend.herokuapp.com/",
    title: "Python News Feed",
    description:
      "A refactored application. This was originally a Node.js project but has been refactored into Python Flask application. You can see your friends, comment on their posts, and upvote the posts. Users can also edit, delete, and create their own posts. Storing all this information is thanks to SQLAlchemy, and Flask for VM testing.",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    link: "https://github.com/mbarrientos1129/CatWorx.BadgeMaker",
    title: "CatWorx.BadgeMaker",
    description:
      "An application made with C# and SK Paint to create work place badges with ease. The badge information is entered through the terminal, input into a CSV file and then rendered as a PDF. This provides an easy printing format.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    link: "https://github.com/bxz5089/CumulusChat",
    title: "Cumulus Chat",
    description:
      "Hello, welcome to the Cumulus Chat app Github page. We created this chat app because we believe staying connected with friends is essential. The app is built using Node, Express, Sequelize, MySQL, Bootstrap, Handlebars, and Socket.io. This is a group application and further infomration is provided on the GitHub repo.",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    link: "https://github.com/Adolfo-G/Accord",
    title: "Accord",
    description:
      "Tired of Facebook and Instagram? Ever just want an simple and reliable platform to share or track your stories, knowledges, and experiences? Accord can provide the reliability and simplicity that you are looking for in a platform. This is a group application and further infomration is provided on the GitHub repo. ",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            link={project.link}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
