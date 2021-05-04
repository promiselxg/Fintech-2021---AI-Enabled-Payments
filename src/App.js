import React, { useEffect } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Team from "./components/Team";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Body />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
