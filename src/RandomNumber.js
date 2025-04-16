import { useState } from "react"
const RandomNumber = () => {
const [number,setnumber]=useState(0)
const random = ()=>{
    setnumber(Math.floor(Math.random()*10)+1)
}
return(
    <div className="bord">
        <h1 className="head">Random Number</h1>
        <h1>{number}</h1>
        <button onClick={random} className="btn">Click</button>

    </div>
)

}
export default RandomNumber