import { BrowserRouter, Route, Routes } from "react-router-dom"
import GeneralForm from "./components/GeneralForm"
import PortalForm from "./components/PortalForm"
import "./App.css";


function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <GeneralForm /> } />
        <Route path="/portal" element={ <PortalForm /> } />
      </Routes>
    </BrowserRouter>
   
  </div>
}

export default App
