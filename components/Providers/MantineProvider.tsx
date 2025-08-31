"use client";
import * as Core from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useCookieState } from "./CookieProvider";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@/assets/styles/global.scss";

export const MantineProvider = ({ children }: { children?: React.ReactNode }) => {
  const theme = useAppTheme();
  const [scheme] = useCookieState<Core.MantineColorScheme>("mantine-scheme", "auto");

  return (
    <Core.MantineProvider theme={theme} defaultColorScheme={scheme}>
      {children}
      <Notifications />
    </Core.MantineProvider>
  );
};

const useAppTheme = () => {
  const [fontFamily] = useCookieState("theme-font-family", "Roboto");
  const [primaryColor] = useCookieState("theme-primary-color", "green");
  const [autoContrast] = useCookieState("theme-auto-contrast", false);
  const [scale] = useCookieState("theme-scale", 1);

  return Core.createTheme({
    fontFamily,
    primaryColor,
    autoContrast,
    scale,
    defaultRadius: 5,
    colors: { green: Core.colorsTuple("#00A550") },
    components: {
      Badge: Core.Badge.extend({ defaultProps: { radius: 5, tt: "none" } }),
      Avatar: Core.Avatar.extend({ defaultProps: { radius: 5 } }),
      Card: Core.Card.extend({ defaultProps: { withBorder: true } }),
      Button: Core.Button.extend({ defaultProps: { variant: "default" } }),
      NavLink: Core.NavLink.extend({ styles: { root: { borderRadius: 5 } } }),
      Stack: Core.Stack.extend({ defaultProps: { gap: 20 } }),
      Modal: Core.Modal.extend({
        defaultProps: {
          overlayProps: { blur: 5 },
          transitionProps: { transition: "fade-up" },
          centered: true,
        },
      }),
      Menu: Core.Menu.extend({
        defaultProps: {
          shadow: "sm",
          keepMounted: true, // keep in DOM, required for modals
          arrowPosition: "center",
          withArrow: true,
          arrowSize: 12,
        },
      }),
    },
  });
};
