import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import BgVideos from './assets/canvideos.mp4'

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='relative'>
          <div>
          <video src={BgVideos} autoPlay muted loop/>
          <Navbar />
          <Hero />
          </div>
        </div>
        <About />
        <Experience />
        
        {/* <StarsCanvas /> */}
        

        {/* <Feedbacks /> */}
  
        <Tech />
        <Works />
          <Contact />
        {/* <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
