import "./App.css";
import HomePage from "./page/HomePage";
import MainLayout from "./layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutePage from "./page/AboutePage";
import JsonLdSchemas from "./schema/JsonLdSchemas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <MainLayout>
        <AboutePage />
      </MainLayout>
    ),
  },
]);
function App() {
  
  return (
    <>
      <RouterProvider router={router} />
      <JsonLdSchemas />
    </>
  );
}

export default App;
