import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Gallery />
    </div>
  );
}
