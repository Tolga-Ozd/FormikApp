import { BrowserRouter, Route, Routes } from "react-router-dom"
import GeneralForm from "./components/GeneralForm"
import PortalForm from "./components/PortalForm"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <GeneralForm /> } />
        <Route path="/portal" element={ <PortalForm /> } />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
