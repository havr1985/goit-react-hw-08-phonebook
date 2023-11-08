import { Suspense } from "react";
import { AuthNav } from "./AuthNav/AuthNav"; 
import { Loader } from "./Loader";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    return (
        <>
            <header>
                <AuthNav/>
            </header>
            <div>
                <Suspense fallback={<Loader/>}>
                    <Outlet/>
                </Suspense>
            </div>
        </>
    )

}