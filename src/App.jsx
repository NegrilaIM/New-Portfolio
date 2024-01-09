import "./App.css";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Experience from "./Components/Qualifications/Experience";
import Skills from "./Components/Skills/Skills";

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
      </main>
    </>
  );
}

export default App;
