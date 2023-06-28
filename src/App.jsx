import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
