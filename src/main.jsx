import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import UserListing from './components/User/UserListing'
import Formikform from './components/User/FormikForm'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: "/user/listing",
    element: (
      <UserListing/>
    ),
  },
  {
    path: "/user/formikform",
    element: (
      <Formikform/>
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
