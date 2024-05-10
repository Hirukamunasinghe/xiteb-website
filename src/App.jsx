import { useState } from 'react'
import './index.css'
// sections
import Home from './sections/Home';
import Welcome from './sections/Welcome';
import Services from './sections/Services';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials';
import Logos from './sections/Logos';
import News from './sections/News';
import Footer from './sections/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* Sections */}
      <Home/>
      <Welcome/>
      <Services/>
      <Stats/>
      <Testimonials/>
      <Logos/>
      <News/>
      <Footer/>
    </div>
  )
}

export default App
