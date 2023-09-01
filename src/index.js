import React from 'react';
import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App';
import reportWebVitals from './reportWebVitals';

import ErrorPage from "./pages/error/error";
import ProjectPage from "./pages/project/project";
import ProjectListPage from "./pages/projects-list/projects-list-page";
import SubmitProjectPage from "./pages/submit-project/submit-project";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProjectListPage />,
      },
      {
        path: "project/:projectId",
        element: <ProjectPage />,
      },
      {
        path: "submit",
        element: <SubmitProjectPage />,
      }

    ],
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
