import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.scss'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from "./pages/Home";
import Card from "./pages/Card";
import About from "./pages/About";
import Cart from './pages/Cart';
import Contacts from "./pages/Contacts";
import Catalog from './pages/Catalog';
import Certificates from "./pages/Certificates";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/> ,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/cart",
        element: <Cart/>,
    },
    {
        path: "/card",
        element: <Card/>,
    },
    {
        path: "/contacts",
        element: <Contacts/>,
    },
    {
        path: "/catalog",
        element: <Catalog/>,
    },
    {
        path: "/certificates",
        element: <Certificates/>,
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
