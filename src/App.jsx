import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Mycontent

} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Hero />

      <About />

      <div className="relative z-0">
        <Tech />
        <StarsCanvas />
      </div>
      <Works />

    <Mycontent/>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
