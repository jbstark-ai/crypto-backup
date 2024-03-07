import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { extendTheme } from "@chakra-ui/react";
import "./index.css";
import "./fonts.css";

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root")!);

const theme = extendTheme({
  fonts: {
    heading: `'Genniro', Arial, Helvetica, sans-serif`,
    body: `Arial, Helvetica, sans-serif`,
  },
});

export default theme;

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
