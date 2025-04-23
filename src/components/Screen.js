import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const Screen = () => {

    const { calc } = useContext(CalcContext)
    
    return (
        <div className="screen">2342535</div>
    )
}

export default Screen