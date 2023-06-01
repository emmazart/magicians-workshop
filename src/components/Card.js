import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ItemCard(props) {
    const service = props.services;
    const theme = useTheme();

    const galleryCard = {
        m: 3, minWidth: 250, backgroundColor: '#DB504A', p: 3
    };

    const serviceCard = {
        m: 3, minWidth: 250, backgroundColor: `${theme.palette.primary.main}`, p: 3 
    };

    return(
        <div>
        
        {/* if the "services" prop is set to true (ie. it is a services ItemCard), render the first option */}
        { service ? (
                <Card sx={serviceCard}>
                    <CardContent>
                    <h3>{props.title}</h3>
                    <p>This is Services Card: {props.description}</p>
                    <p>{props.price}</p>
                    </CardContent>
                </Card>
            
            // otherwise render the gallery type card
            ) : (
                <Card sx={galleryCard}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={require("../assets/gallery/allwalks.png")}
                        title="screen shot of website">
                    </CardMedia>
                    <a href={props.link} style={{ textAlign: "right"}}><p>Click to see more >></p></a>
                </Card>
            )
        }
        </div>
    )
}

export default ItemCard;