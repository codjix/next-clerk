"use client";
import { createContext, useContext, useState } from "react";
import { Box, BoxProps, Stack, SegmentedControl } from "@mantine/core";
import { type StackProps, type SegmentedControlItem } from "@mantine/core";

const SegTabCtx = createContext<string>("");

type $SegTabs = StackProps & {
  value: string;
  data: (string | SegmentedControlItem)[];
  children?: React.ReactNode;
};
export const SegTabs = ({ children, value, data, ...props }: $SegTabs) => {
  const [current, setCurrent] = useState(value);

  return (
    <Stack {...props}>
      <SegTabCtx value={current}>
        <SegmentedControl value={current} onChange={setCurrent} data={data} />
        {children}
      </SegTabCtx>
    </Stack>
  );
};

type $SegTab = BoxProps & {
  value: string;
  keepMounted?: boolean;
  children?: React.ReactNode;
};
export const SegTab = ({ value, keepMounted, ...props }: $SegTab) => {
  const current = useContext(SegTabCtx);

  if (keepMounted) {
    return <Box hidden={value != current} {...props} />;
  } else {
    return value == current ? <Box {...props} /> : null;
  }
};

SegTabs.Tab = SegTab;
