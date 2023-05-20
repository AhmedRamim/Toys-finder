import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import AddToys from "../pages/AddToys/AddToys";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import SingleToyDetails from "../pages/SingleToyDetails/SingleToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import UpdatedToy from "../pages/UpdateToy/UpdatedToy";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/addToys',
          element:<PrivateRoute><AddToys></AddToys></PrivateRoute>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/singleToys/:id',
          element:<PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
          loader:() => fetch(`http://localhost:5000/alltoys`)
        },
        {
          path:'myToys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path:'/updateToy/:id',
          element:<PrivateRoute><UpdatedToy></UpdatedToy></PrivateRoute>,
          loader:({params}) => fetch(`http://localhost:5000/updateToy/${params.id}`)
        }
      ]
    },
  ]);

  export default Router;