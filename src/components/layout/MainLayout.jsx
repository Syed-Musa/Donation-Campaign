import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar";
import { useEffect } from "react";

const MainLayout = () => {

    const loc = useLocation();
    console.log(loc)

    useEffect(()=>{
        console.log(loc.pathname);
        if(loc.pathname == '/'){
            document.title = `Donate Campaign-home`;
        }else{
            document.title = `Donate Campaign ${loc.pathname.replace("/",'-')}`;
        }

        if(loc.state){
            document.title = `${loc.state}`;
        }
    }, [loc.pathname, loc.state]);

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="py-10">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;