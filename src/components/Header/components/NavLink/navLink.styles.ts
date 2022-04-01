import { chakra, Link as CkLink } from "@chakra-ui/react";

export const Link = chakra(CkLink, {
  baseStyle: () => ({
    display: "block",
    py: 2,
    mx: "20px !important",
    transition: "all 0.3s",
    fontWeight: "medium",
    lineHeight: "1.25rem",
    width: "max-content",
    color: {
      base: "#414141",
      md: "#fff",
    },
  }),
});
