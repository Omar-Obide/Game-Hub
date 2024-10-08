import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";
import GameDetailPage from "./Pages/GameDetailPage";
import Homepage from "./Pages/Homepage";
import Layout from "./Pages/Layout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: 'games/:slug',
        element: <GameDetailPage/>
      }
    ],
  },
]);

export default Router;
