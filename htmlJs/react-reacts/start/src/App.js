import { lazy, Suspense } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Preloader from './components/Preloader';

// chunking / lazy loading / dynamic bundling / on-demand loading / code splitting
const Grocery = lazy( () => import("./components/Grocery") );
const About = lazy( () => import("./components/About") );

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <Suspense fallback={<Preloader />}><About /></Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Preloader />}><Grocery /></Suspense>,
            },
            {
                path: "/restaurant/:resId", // /:resId for dynamic resId
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    },
])
const rootElement = document.getElementById("root");

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<RouterProvider router={appRouter} />);
}