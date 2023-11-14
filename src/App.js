import { Toaster } from 'react-hot-toast';
import {About, Contact, Footer, Header, HeaderPhone, Home, Services, Testimonial, Timeline} from './components/index';
import './styles/app.scss';
import { useState } from 'react';

function App() {
  const [menuOpen, setmenuOpen] = useState(false)
  // console.log(menuOpen);
  return (
    <div>
      <HeaderPhone menuOpen={menuOpen}/>
      <Header menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <Home/>
      <About/>
      <Timeline/>
      <Services/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      <Toaster/>
    </div>
  );
}

export default App;
