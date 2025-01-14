import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

const Home = () => {
    const { setActiveAlert } = useContext(AlertContext);
    return (
        <div className="home">
            Home
            <button onClick={() => setActiveAlert(true)}>
                Ver alerta
            </button>
        </div>
    )
}

export default Home;