import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Accommodation from "./pages/Accommodation"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/:id" element={<Accommodation/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/not-found" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
