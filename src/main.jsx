import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
//import { ChakraUIProvider } from "./chakra-ui/chakra-ui.provider";
import { ColorModeProvider } from "@chakra-ui/color-mode";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors: {
    brand: {
      900: "#024fc9",
      800: "#146af5",
      700: "#2977f2",
      600: "#337df2",
      500: "#4287f5",
    },
  },
  fonts: {
    body: "Tahoma",
    heading: "Courier New",
  },
  config,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </React.StrictMode>
);
