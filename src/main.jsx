import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Blog from "./components/Blog/Blog.jsx";
import ErrorPage from "./components/ErrorPage/Error.jsx";
import Register from "./components/Header/Register";
import Login from "./components/Header/Login.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import ViewRecipe from "./components/Home/ViewRecipe";
import PrivateRoute from "./components/ProvateRoute/PrivateRoute.jsx";
import Terms from "./components/Header/Terms.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/viewrecipe/:id",
        element: (
          <PrivateRoute>
            <ViewRecipe></ViewRecipe>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleData/${params.id}`),
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
