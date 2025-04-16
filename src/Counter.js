import { useState } from "react"

const Counterapp = () => {
    const [count, setnumber] = useState(0)
    const increment = () => {
        setnumber(count + 1)
    }
    const decrement = () => {
        setnumber(count - 1)
    }
    return (
        <div className="bord">
            <h1 className="head">Counter</h1>
            <h1>{count}</h1>
            <button className="btn" onClick={increment} >INC</button>

            <button className="btn" onClick={decrement}>DEC</button>
        </div>
    )
}
export default Counterapp