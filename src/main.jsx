import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import Root from './Root';
import Home from './Components/Home/Home';
import AddCars from './Components/SharedPage/AddCars';
import AuthProvider from './Components/ProviderAndPrivateRoute/AuthProvider';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/signUp';
import PrivateRoute from './Components/ProviderAndPrivateRoute/PrivateRoute';
import Profile from './Components/Home/Profile';
import CarDetails from './Components/Home/CarDetails';
import MyCarts from './Components/SharedPage/MyCarts';
import EachCardDetails from './Components/SharedPage/EachCardDetails';
import CarUpdate from './Components/SharedPage/CarUpdate';
import ErrorPage from './ErrorPage';
import UserFeedback from './Components/SharedPage/UserFeedback';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage/>,
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/addcars',
        element: <PrivateRoute><AddCars /></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path: '/signup',
        element:<SignUp/>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: '/carcards/:name',
        element:<PrivateRoute><CarDetails/></PrivateRoute>,
        loader: ({params})=> fetch(`https://cars-server-tan.vercel.app/carcards/${params.name}`)
      },
      {
        path:'/mycarts',
        element: <PrivateRoute><MyCarts/></PrivateRoute>,
        loader:()=>fetch('https://cars-server-tan.vercel.app/mycarts'),
      },
      {
        path:'/addedcars/:id',
        element:<PrivateRoute><EachCardDetails/></PrivateRoute>,
        loader: ({params})=> fetch(`https://cars-server-tan.vercel.app/addedcars/${params.id}`)
      },
      {
        path:'/update/:id',
        loader:({params})=> fetch(`https://cars-server-tan.vercel.app/update/${params.id}`),
        element: <PrivateRoute><CarUpdate/></PrivateRoute>
      },
      {
        path:'/feedback',
        element:<PrivateRoute><UserFeedback/></PrivateRoute>,
        loader:()=> fetch('https://cars-server-tan.vercel.app/feedback')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>

  </React.StrictMode>,
)
