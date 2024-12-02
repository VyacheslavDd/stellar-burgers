import { TUser } from "@utils-types";
import React, { ReactElement } from "react"
import { Navigate, useLocation } from "react-router-dom";

export type ProtectedRouteProps = {
    redirectToLogin?: boolean;
    children: ReactElement;
}

export default function ProtectedRoute({redirectToLogin, children}: ProtectedRouteProps) {

    const user: TUser | undefined = undefined;
    const location = useLocation();

    if (!redirectToLogin && user) {
        const from = location.state?.from || {pathname: '/'};
        return <Navigate replace to={from}/>
    }

    if (redirectToLogin && !user) {
        return <Navigate replace to='/login' state={{from: location}}/>
    }

    return children;
}