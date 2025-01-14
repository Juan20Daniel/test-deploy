import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Alert from "../components/Alert";
import { AlertContext } from "../context/AlertContext";
const Layout = () => {
    const { activeAlert } = useContext(AlertContext);
    return (
        <div className="layout">
            <Outlet />
           {activeAlert  && <Alert />}
        </div>
    )
}

export default Layout;