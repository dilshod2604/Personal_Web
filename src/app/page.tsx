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
import { BackgroundBeamsWithCollision } from "@/components/ui/components/background-beams-with-collision";

function App() {
  const [preloader, setPreloader] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // if (preloader) {
  //   return <Preloader />;
  // } else {
    return (
      <>
        <BackgroundBeamsWithCollision className="background">
          <ThemeProvider>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
          </ThemeProvider>
        </BackgroundBeamsWithCollision>
      </>
    );
  // }
}

export default App;
