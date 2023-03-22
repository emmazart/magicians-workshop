import React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ItemCard(props) {
    const service = props.services;
    const theme = useTheme();

    const galleryCard = {
        m: 3, minWidth: 250, backgroundColor: '#DB504A'
    };

    const serviceCard = {
        m: 3, minWidth: 250, backgroundColor: `${theme.palette.primary.main}` 
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
                    <p>This is Gallery Card: {props.description}</p>
                    <p>{props.image} / {props.link}</p>
                </Card>
            )
        }
        </div>
    )
}

export default ItemCard;