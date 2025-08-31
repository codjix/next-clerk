"use client";
import { useEffect, useState } from "react";
import { Icon, IconifyIcon, IconProps, loadIcon } from "@iconify/react";
import { Loader } from "@mantine/core";

export const Iconify = ({ icon, ...props }: IconProps) => {
  const size = props.width || props.height || 16;
  const fallback = <Loader size={size} type="bars" p={5} opacity={0.8} />;
  const [data, setData] = useState<Required<IconifyIcon> | string>("tabler:icons");

  useEffect(() => {
    if (typeof icon === "string") {
      const cached = globalThis.localStorage?.getItem(`iconify$${icon}`);
      if (cached) setData(JSON.parse(cached));
      else {
        loadIcon(icon).then((data) => {
          globalThis.localStorage?.setItem(`iconify$${icon}`, JSON.stringify(data));
          setData(data);
        });
      }
    }
  }, [icon]);

  return <Icon fallback={fallback} {...props} icon={data} />;
};
