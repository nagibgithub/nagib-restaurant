import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Contact from "../pages/Contacts/Contact";
import Deshboard from "../pages/Deshboard/Deshboard";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import ErrorPage from "../pages/ErrorPage";
import ServerControl from "../ServerControl/ServerControl";
import Login from "../pages/LoginRegister/Login";
import Register from "../pages/LoginRegister/Register";
import ShopCategory from "../pages/Shop/ShopCategory";
import ShopCategoryLayout from "../layouts/ShopCategoryLayout";
import PassTest from "../pages/example/PassTest";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/contact", element: <Contact /> },
            { path: "/deshboard", element: <Deshboard /> },
            { path: "/menu", element: <Menu /> },
            { path: "/shop", element: <Shop /> },
            { path: "/server", element: <ServerControl /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
        ]
    },
    { path: "/shop/:id", element: <ShopCategoryLayout />, children: [{ path: "/shop/:id", element: <ShopCategory /> }] },
    { path: '/test', element: <PassTest /> }
]);

export default router;