
import './App.css'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import Header from  "./components/Header"
const Main = lazy(() =>import ('./pages/Main'));
const About =lazy(() => import ('./pages/About'));
const Services = lazy(() =>import ('./pages/Services'));

function App() {
 

  return (
    <BrowserRouter>
    <div>
      <Header/>

      <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About/>} />
            <Route path="/service" element={<Services/>} />
          </Routes>
        </Suspense>

    </div>
    </BrowserRouter>
  )
}

export default App
