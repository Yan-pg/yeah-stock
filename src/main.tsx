import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App.tsx";
import "./style/global.css";
import { Sidebar } from "./components/SideBar/index.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateProduct } from "./pages/createProduct/CreateProduct.tsx";
import { EditProduct } from "./pages/editProduct/EditProduct.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create-product",
    element: <CreateProduct />,
  },
  {
    path: "/edit-product/:id",
    element: <EditProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Sidebar>
      <RouterProvider router={router} />
    </Sidebar>
  </React.StrictMode>
);
