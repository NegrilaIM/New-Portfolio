import "./App.css";
import About from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Experience from "./Components/Qualifications/Experience";
import { ScrollUp } from "./Components/ScrollUp/ScrollUp";
import Skills from "./Components/Skills/Skills";
import { Testimonials } from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main
        className="main
      "
      >
        <Home />
        <About />
        <Skills />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
