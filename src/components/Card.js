import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function ItemCard(props) {
    const service = props.services;
    const highlights = props.highlights;
    const theme = useTheme();

    const galleryCard = {
        m: 3, minWidth: 250, backgroundColor: `${theme.palette.primary.light}`, p: 3
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
                    <h3 style={{fontSize: '1.5rem', borderBottom: `solid 1px ${theme.palette.primary.dark}`, paddingBottom: '10px'}}>{props.title}</h3>
                    <p>{props.description}</p>
                    <ul style={{textAlign:'left', fontSize: 'smaller'}}>
                        {highlights.map(highlight => {
                            return(
                                <li>{highlight}</li>
                            )
                        })}
                    </ul>
                    <p>{props.range}</p>
                    <p style={{fontStyle:"italic"}}>{props.price}</p>
                    </CardContent>
                </Card>
            
            // otherwise render the gallery type card
            ) : (
                <Card sx={galleryCard}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <CardMedia
                        sx={{ height: 400 }}
                        image={require(`../assets/gallery/${props.image}`)}
                        title="screen shot of website">
                    </CardMedia>
                    <a href={props.link} style={{ textAlign: "right", color: `${theme.palette.primary.darker}`}}><p>Click to see more >></p></a>
                </Card>
            )
        }
        </div>
    )
}

export default ItemCard;