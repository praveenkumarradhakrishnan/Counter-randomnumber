import react from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Counterapp from "./Counter"
import RandomNumber from "./RandomNumber"
const root = ReactDOM.createRoot(document.getElementById("root"))


root.render(
  <>
  <Counterapp /><br/>
  <RandomNumber/>
  </>
  
)