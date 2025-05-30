import React from "react";
import { Web3ModalProvider } from "./providers/Web3ModalProvider";
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
    body: `'Open Sans', Arial, Helvetica, sans-serif`,
  },
});

export default theme;

root.render(
  <React.StrictMode>
    <Web3ModalProvider>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Web3ModalProvider>
  </React.StrictMode>
);
