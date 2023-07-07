import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import SecondWork from "./pages/2d-work";
import ThirdWork from "./pages/3d-work";
import FourthWork from "./pages/4th-work";
import MainLayout from "./layouts/main";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "2d-work",
          element: <SecondWork />,
        },
        {
          path: "3d-work",
          element: <ThirdWork />,
        },
        {
          path: "4th-work",
          element: <FourthWork />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
