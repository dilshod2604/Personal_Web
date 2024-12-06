"use client";
import Header from "@/components/containers/Header/Header";
import ThemeProvider from "@/providers/ThemeProvider";
import { useEffect, useState } from "react";
import "./globals.scss";
import Home from "@/components/containers/Home/Home";
import About from "@/components/containers/About/About";
import Skills from "@/components/containers/Skills/Skills";
import Projects from "@/components/containers/Projects/Projects";
import Contacts from "@/components/containers/Contacts/Contacts";
import Footer from "@/components/containers/Footer/Footer";
import Preloader from "@/components/Preloader/Preloader";

function App() {
  const [preloader, setPreloader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1000);
  }, []);

  if (preloader) {
    return <Preloader />;
  }
  return (
    <>
        <ThemeProvider>
          <Header />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contacts />
          <Footer />
        </ThemeProvider>
    </>
  );
}

export default App;
