import {Navigate, type RouteObject} from "react-router";
import {lazy} from "react";

/* Lazy load */
const AuthPage = lazy(() => import("../ui").then(({ AuthPage }) => ({ default: AuthPage })))
const Login = lazy(() => import("../ui/Login").then(({ Login }) => ({ default: Login })))
const Register = lazy(() => import("../ui/Register").then(({ Register }) => ({ default: Register })))

export const AUTH_ROUTING: RouteObject[] = [{
    path: "/auth",
    element: <AuthPage />,
    children: [
        { index: true, element:<Navigate to="login" replace />},
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
    ]
}]