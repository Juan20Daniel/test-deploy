import { useContext, useEffect } from "react";
import { AlertContext } from "../context/AlertContext";

const Notes = () => {
    const { setActiveAlert } = useContext(AlertContext);
    useEffect(() => {
        console.log('Golllllll')
    },[]);
    console.log('exce')
    return (
        <div className="notes">
            Notes
            <button onClick={() => setActiveAlert(true)}>
                Ver alerta
            </button>
        </div>
    )
}

export default Notes;