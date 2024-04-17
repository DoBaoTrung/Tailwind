import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

function DefaultLayout() {
    return (
        <div className="main">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;