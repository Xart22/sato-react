import React from "react";
import Navbar from "./components/header/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Product from "./components/product/Product";
import Slider from "./components/slider/Slider";
import Kategori from "./components/kategori/Kategori";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Slider />
        <Kategori />
        <Product />
      </Container>
    </>
  );
}

export default App;
