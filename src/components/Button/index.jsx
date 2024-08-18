"use client";

import {
  Button as NextUIButton,
  ButtonGroup as NextUIButtonGroup,
} from "@nextui-org/button";
import { Spinner } from "@nextui-org/react";
import { extendVariants } from "@nextui-org/system";

export const Button = extendVariants(NextUIButton, {
  variants: {
    color: {
      primary: "border-primary",
    },
    size: {
      md: "h-auto px-6 py-1.5",
      lg: "text-lg",
      sm: "px-3 py-2 gap-2 h-auto",
    },
    variant: {
      bordered: "bg-transparent border-1 text-primary-400",
      text: "py-0 px-2 underline underline-offset-4 h-auto min-w-fit",
      solid: "border-1 text-white",
      light: "shadow-glow",
      flat: "shadow-md bg-primary-100",
    },
    radius: {
      none: "rounded-none",
      xs: "rounded-sm",
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    spinner: <Spinner size="sm" />,
    color: "primary",
    variant: "solid",
  },
  compoundVariants: [
    {
      color: "primary",
      variant: "text",
      class: "text-primary-400",
    },
  ],
});

export const ButtonGroup = extendVariants(NextUIButtonGroup, {});
