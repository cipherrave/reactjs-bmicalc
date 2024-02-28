import Info from "./pages/Info";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/info",
      element: <Info />,
    },

    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
