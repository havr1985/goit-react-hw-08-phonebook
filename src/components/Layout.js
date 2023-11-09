import { Suspense } from "react";
import { AuthNav } from "./AuthNav/AuthNav"; 
import { Loader } from "./Loader";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
       <div>
            <header>
                <AuthNav/>
            </header>
            
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </div>
       
    )

}