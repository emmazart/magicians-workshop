import React from 'react';
import Nav from './Nav';
import Typography from "@mui/material/Typography";

function Header() {
    return (
        <div>
            <Typography variant="h1" component="h1"> designing websites & administrative tools for small businesses
</Typography>
            <Nav></Nav>
        </div>
    )
}

export default Header;