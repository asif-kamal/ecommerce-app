import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import StoreAppWrapper from "./pages/StoreAppWrapper";
import ProductListPage from "./pages/ProductListPage/ProductListPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StoreAppWrapper />,
    children: [
      {
        path:"/",
        element: <App />
      },
      {
        path:"/audiovideo",
        element: <ProductListPage />
      }
    ]
  },
]);
