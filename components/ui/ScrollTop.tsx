"use client";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Transition, ActionIcon } from "@mantine/core";
import { Iconify } from "./Iconify";

export const ScrollTop = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const top = () => scrollTo({ y: 0 });

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(style) => (
          <ActionIcon size="40px" variant="default" onClick={top} style={style}>
            <Iconify height={20} icon="tabler:arrow-up" />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};
