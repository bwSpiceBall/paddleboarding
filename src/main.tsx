import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { APIProvider as GMapsProvider } from "@vis.gl/react-google-maps";

import "./index.css";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GMapsProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    <React.StrictMode>
      <RouterProvider router={router} />  
    </React.StrictMode>
  </GMapsProvider>
);


