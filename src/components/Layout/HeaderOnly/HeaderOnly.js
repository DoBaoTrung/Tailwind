import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";

function HeaderOnly() {
    return (
        <div>
            <Header />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
}

export default HeaderOnly;