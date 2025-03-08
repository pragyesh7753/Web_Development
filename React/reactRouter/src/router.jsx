import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import App from "./App";
import PostIdPage from "./pages/PostIdPage";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App, //as a layout
        children: [
            {
                path: '',
                Component: HomePage
            },
            {
                path: '/about',
                Component: AboutPage
            },
            {
                path: '/contact',
                Component: ContactPage
            },
            // {
            //     path: 'post/:id',
            //     Component: PostIdPage
            // }
            {
                path: 'post/:id?',  //? means optional
                Component: PostIdPage
            }
        ]
    },
    {
        path: '*', // wildcard route
        Component: ErrorPage
    }
])