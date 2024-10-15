import reactDom from "react-dom"
import { Overlay } from "./styles"

export default function Loader() {
    return (
        reactDom.createPortal(
            <Overlay>
                <div className="loader"></div>
            </Overlay>
            , document.getElementById('loader-root')
        )
    )
}

