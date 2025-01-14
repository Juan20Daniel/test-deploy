import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const Alert = () => {
    const { setActiveAlert } = useContext(AlertContext);
    const handleClick = () => {
        setActiveAlert(false);
    }
    const handlePropagation = (e) => {
        e.stopPropagation();
    }
    return (
        <div className="alert box-center" onClick={() => handleClick()}>
            <div className="alert-content" onClick={handlePropagation}>
                hola
            </div>
        </div>
    )
}

export default Alert;