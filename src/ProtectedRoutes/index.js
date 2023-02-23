import React from 'react';
import { Route, Routes, Outlet, useNavigate } from 'react-router-dom';

const ProtectedRoutes = ({ auth, ...rest }) => {
    const navigate = useNavigate()
    console.log("protectedRoutesAuth", auth, rest, Outlet)
    /**
          *  here we write, Prevent to redirecting between Pages through URL Logic-----------------
          */
    if (auth) return <Outlet />
    if (!auth ) return (

        /**-------Here is the error,--> mannualy change the URL  not redirect to LOGIN and runs infinit--- */
        // <Navigate to="/" /> 
       
        navigate("/")
       
    )

}
export default ProtectedRoutes;