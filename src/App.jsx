import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
     {
      path: "/contact",
      element: <Contact/>,
    },
  ]);

  return <RouterProvider router={router} />
}

export default App