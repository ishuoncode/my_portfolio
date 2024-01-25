import About from './components/About';

import Qualities from './components/Qualities';
import Work from './components/Work';

export default function Home() {
  return (
    <div className=" min-h-screen ">
     
      <About />
      <Work />
      <Qualities/>
      
    </div>
  );
}
