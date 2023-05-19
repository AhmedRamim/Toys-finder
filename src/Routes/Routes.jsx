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


  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element:<AddToys></AddToys>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/singleToys/:id',
          element:<SingleToyDetails></SingleToyDetails>,
          loader:() => fetch(`http://localhost:5000/alltoys`)
        },
        {
          path:'myToys',
          element:<MyToys></MyToys>
        }
      ]
    },
  ]);

  export default Router;