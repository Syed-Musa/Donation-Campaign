import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h2>This is a navbar</h2>

            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;