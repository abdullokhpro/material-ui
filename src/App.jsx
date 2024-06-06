import { useState } from "react";
import "./App.css";
import SearchAppBar from "./comonents/layouts/navbar";
import Hero from "./comonents/hero";
import Cards from "./comonents/cards";
import Footer from "./comonents/layouts/footer";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <SearchAppBar />
      <Container component="main" sx={{ mt: 8, mb: 2 }}>
        <Hero />
        <Cards />
      </Container>
      <Footer />
    </>
  );
}

export default App;
