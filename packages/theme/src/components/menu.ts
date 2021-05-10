import { mode, scope } from "@chakra-ui/theme-tools"
import { ThemeComponentProps } from "../theme.types"

const parts = scope("menu").parts(
  "list",
  "item",
  "groupTitle",
  "command",
  "divider",
  "button",
  "listContainer",
  "group",
)

function baseStyleList(props: ThemeComponentProps) {
  return {
    bg: mode(`#fff`, `gray.700`)(props),
    boxShadow: mode(`sm`, `dark-lg`)(props),
    color: "inherit",
    minW: "3xs",
    py: "2",
    zIndex: 1,
    borderRadius: "md",
    borderWidth: "1px",
  }
}

function baseStyleItem(props: ThemeComponentProps) {
  return {
    py: "0.4rem",
    px: "0.8rem",
    transition: "background 50ms ease-in 0s",
    _focus: {
      bg: mode(`gray.100`, `whiteAlpha.100`)(props),
    },
    _active: {
      bg: mode(`gray.200`, `whiteAlpha.200`)(props),
    },
    _expanded: {
      bg: mode(`gray.100`, `whiteAlpha.100`)(props),
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  }
}

const baseStyleGroupTitle = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm",
}

const baseStyleCommand = {
  opacity: 0.6,
}

const baseStyleDivider = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "0.5rem",
  opacity: 0.6,
}

const baseStyle = (props: ThemeComponentProps) => ({
  [parts.list]: baseStyleList(props),
  [parts.item]: baseStyleItem(props),
  [parts.groupTitle]: baseStyleGroupTitle,
  [parts.command]: baseStyleCommand,
  [parts.divider]: baseStyleDivider,
})

export default {
  baseStyle,
}
