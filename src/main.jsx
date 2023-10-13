import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import ListContact, { dataLoader } from './page/ListContact.jsx';
import Home from './page/Home.jsx';
import ErrorPage from './page/ErrorPage.jsx';
import Details, { detailsLoader } from './page/Details.jsx';
import EditPage, { loaderEdit } from './page/EditPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "list-contact",
        loader: dataLoader,
        element: <ListContact />,
      },
      {
        path: "list-contact/details/:detailsId",
        loader: detailsLoader,
        element: <Details />,
      },
      {
        path: "list-contact/details/:detailsId/edit/:editId",
        loader: loaderEdit,
        element: <EditPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
