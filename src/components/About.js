import React from 'react';
import Card from '@mui/material/Card';
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

function About() {

    const theme = useTheme();
    const styles = {
        container: {
            m: 3, p:3, minWidth: 250, backgroundColor: 'grey'
        },
        // h2: {
        //     color: theme.palette.primary.main
        // }
    };

    return (
        <Card id="about" sx={styles.container}>
        <Typography variant="h3" component="h2">About Me</Typography>

        {/* CONTAINER HOLDS IMAGE AND TEXT CONTAINER */}
        <div className="py-1 my-1 flex flex-col md:flex-row">
          <div className="flex flex-row flex-none justify-center mx-2">
            <img
              className="my-3"
              src={require("../assets/profile_pic.jpg")}
              style={{ height: "200px", width: "200px", borderRadius: "10%" }}
              alt="Emma smiling at the camera"
            ></img>
          </div>

          {/* ABOUT ME TEXT */}
          <div className="md:px-5 md:mx-2 flex-column align-top justify-center">
            <h3 className="my-2">Hi! I'm Emma</h3>
            <p className="my-3">
              I'm a full stack web developer leveraging my theatre management
              and small business operations background to build helpful and
              intuitive tools for everyday use.
            </p>
            <p className="my-3">
              I recently completed a certificate in full stack development from
              the University of Minnesota Coding Bootcamp, am known as a leader
              in group-developed projects, and have a passion for streamlining
              communication and developing clean, user-friendly applications.
            </p>
            <p className="my-3">
              In personal projects, my goal is to learn new technologies and use
              current knowledge in novel ways, not always focusing on the end
              product as the driving force. I’m looking for my next opportunity
              and excited to join a collaborative, quality and community-driven
              team to build applications with a purpose.
            </p>
            <p className="my-3">
              <span className="font-bold">Languages: </span> <br />
              Javascript • MySQL & NoSQL • HTML & CSS
            </p>
            <p className="my-3">
              <span className="font-bold">Tools & Methodologies: </span> <br />
              MERN Stack • OOP • API Design • Git & Github
            </p>
            <img
              src={require("../assets/badge.png")}
              style={{ height: "200px", width: "200px", display: "inline" }}
              alt="gold and maroon badge reads: University of Minnesota Full Stack Web Development, College of Continuing & Professional Studies"
            ></img>
          </div>
        </div>
      </Card>

    )
}

export default About;