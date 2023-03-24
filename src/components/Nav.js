import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Nav() {


   const styles = {
        navAnchor: {
            flexGrow: 1,
            textDecoration: 'none',
            color: 'black'
        }
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="a" href="#about" sx={styles.navAnchor}>
            About
          </Typography>
          <Typography variant="h6" component="a" href="#work" sx={styles.navAnchor}>
            My Work
          </Typography>
          <Typography variant="h6" component="a" href="#services" sx={styles.navAnchor}>
            Services
          </Typography>
          <Typography variant="h6" component="a" href="#contact" sx={styles.navAnchor}>
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;