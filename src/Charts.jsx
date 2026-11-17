import { useState } from "react"
import s from "./Charts.module.css"
import { Menu } from './components/menu'
function Charts(){
    const [show, setShow] = useState("")
    return(
        <>
            <Menu/>
            <div className={s.wrapCharts}>
                <div className={s.wrapBtns}>
                    <button onClick={() => setShow("Barra")}>Barra</button>
                    <button onClick={() => setShow("Pizza")}>Pizza</button>
                    <button onClick={() => setShow("Linha")}>Linha</button>
            </div>

            </div>
        </>
    )
}

export default Charts