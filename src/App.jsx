import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <div className='relative z-0'>
      <Hero/>
      <StarsCanvas />

      </div>

      <About />

      <div className="relative z-0">
        <Tech />
        <StarsCanvas />
      </div>
      <Works />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
