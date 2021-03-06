import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: true,
  initialColorMode: "dark"
};

const styles = {
  global: props => ({
    body: {
      bg: mode("#ffffff", "#000000")(props)
    }
  })
};

const fonts = {
  heading: "'ms-dos'",
  body: "'JetBrains Mono'"
};

const customTheme = extendTheme({ config, fonts, styles });

export { customTheme };