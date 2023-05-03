import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../component/Login/Login";
import SignUp from "../component/SignUp/SignUp";
import PrivetRoute from "../component/PrivetRoute/PrivetRoute";
// import ViewRecipe from "../Pages/ViewRecipe/ViewRecipe";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <PrivetRoute><Blogs></Blogs></PrivetRoute>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
            // {
            //     path: 'viewrecipe/viewrecipeId',
            //     element: <ViewRecipe></ViewRecipe>,
            //     loader: () => fetch('http://localhost:5000/recipes')
            // }
        ]
    },
]);
export default router;