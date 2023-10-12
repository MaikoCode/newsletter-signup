
import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignupComponent from "./Components/SignupComponent"
import SuccessComponent from "./Components/SuccessComponent"
import { EmailValidationProvider } from "./context/EmailValidationContext"

function App() {
  
  return (

    <EmailValidationProvider>
      <div className="text-base font-roboto min-h-screen md:flex md:bg-charcoal-grey  md:justify-center
      md:content-center ">
        <BrowserRouter basename="/newsletter-signup/" >
          <Routes>
              <Route path="/" element={<SignupComponent />} />
              <Route path="/validated" element={<SuccessComponent />} />
          </Routes>
        </BrowserRouter>

      </div>
    </EmailValidationProvider>
  )
}

export default App
