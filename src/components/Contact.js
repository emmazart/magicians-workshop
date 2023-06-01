import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import { useTheme } from "@mui/material/styles";


function Contact() {

    const theme = useTheme();

    const containerStyles = {
        m: 3, p: 2, border: 8, borderColor: `${theme.palette.error.main}`
    };

    return(
        <Card sx={containerStyles} id="contact">
            <CardContent>
            <h2>Let's work together!</h2>
            <p>If you like my work, send me an email at <a href="mailto:emma.olson794@gmail.com">emma.olson794@gmail.com</a> with details about what you're looking for, a specific service you're interested in, or for more information.</p>
            <p style={{fontSize: 'larger'}}>I'm excited to create with you!</p>
            </CardContent>
        </Card>
    )
};

export default Contact;