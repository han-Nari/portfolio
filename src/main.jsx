import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Homepage from "./pages/HomePage";

// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";

// Styles
import "../src/css/global.css";
import "../src/css/theme.css";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Homepage />
    </RouterProvider>
  </StrictMode>
);
