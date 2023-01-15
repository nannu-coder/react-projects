import { AppProvider } from "./Context/AppProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import SingleItems from "./Pages/SingleItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/singleitem/:id",
        element: <SingleItems />,
      },
    ],
  },
]);

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
