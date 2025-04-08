import { createBrowserRouter } from "react-router-dom";
import Home from "@pages/home";
import Profile from "@pages/profile";
import Login from "@pages/login";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/profile", element: <Profile /> },
]);
