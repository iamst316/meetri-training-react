import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DayOne from './components/DayOne';
import DayTwo from './components/DayTwo/DayTwo'
import Layout from './components/Layout';
import Hooks from './components/DayTwo/Hooks';
import Counter from './components/DayTwo/Counter';
import Stopwatch from './components/DayTwo/Stopwatch';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Gallery from './components/DayTwo/Gallery';
import DayThree from './components/DayThree/DayThree';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<DayOne />} />
          <Route path='/2' element={<DayTwo />}>
            <Route index element={<Hooks />} />
            <Route path='/2/counter' element={<Counter />} />
            <Route path='/2/gallery-redux' element={<Gallery />} />
            <Route path='/2/stopwatch' element={<Stopwatch />} />
          </Route>

          <Route path='/3' element={<DayThree />}>
          
          </Route>
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
