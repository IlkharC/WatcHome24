import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./routes/router";

export default function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
