import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
// sections
import Home from './sections/Home';
import Welcome from './sections/Welcome';
import Services from './sections/Services';
import Stats from './sections/Stats';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home/>
      <Welcome/>
      <Services/>
      <Stats/>
    </div>
  )
}

export default App
