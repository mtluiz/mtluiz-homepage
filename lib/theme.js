import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: true,
  initialColorMode: "light"
};

const styles = {
  global: props => ({
    body: {
      bg: mode("#fefff9", "#000000")(props)
    }
  })
};

const fonts = {
  heading: "'Thunder'",
  body: "'DM Sans'"
};

const customTheme = extendTheme({ config, fonts, styles });

export { customTheme };