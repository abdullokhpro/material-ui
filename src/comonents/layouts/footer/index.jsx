import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Company
            </Typography>
            <Link href="#" variant="body2" color="#fff">
              About Us
            </Link>
            <br />
            <Link href="#" variant="body2" color="#fff">
              Careers
            </Link>
            <br />
            <Link href="#" variant="body2" color="#fff">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Support
            </Typography>
            <Link href="#" variant="body2" color="#fff">
              Help Center
            </Link>
            <br />
            <Link href="#" variant="body2" color="#fff">
              FAQs
            </Link>
            <br />
            <Link href="#" variant="body2" color="#fff">
              Privacy Policy
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Social
            </Typography>
            <Link href="#" variant="body2" color="#fff">
              Facebook
            </Link>
            <br />
            <Link href="#" variant="body2" color="#fff">
              Twitter
            </Link>
            <br />
            <Link href="#" variant="body2" color="#fff">
              Instagram
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="#fff" gutterBottom>
              Legal
            </Typography>
            <Link href="#" variant="body2" color="#fff">
              Terms of Service
            </Link>
            <br />
            <Link href="#" variant="body2" color="#fff">
              License
            </Link>
          </Grid>
        </Grid>

        <Box mt={5} sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Button variant="contained" disableElevation>
            Disable elevation
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
