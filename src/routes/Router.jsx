import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout";
import Contact from "../pages/Contacts/Contact";
import Deshboard from "../pages/Deshboard/Deshboard";
import Menu from "../pages/Menu/Menu";
import Shop from "../pages/Shop/Shop";
import ErrorPage from "../pages/ErrorPage";
import ServerControl from "../ServerControl/ServerControl";

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
        ]
    },
]);

export default router;