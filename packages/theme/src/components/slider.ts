import { mode, orient, scope } from "@chakra-ui/theme-tools"
import { ThemeComponentProps } from "../theme.types"

const parts = scope("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
)

function thumbOrientation(props: ThemeComponentProps) {
  return orient({
    orientation: props.orientation,
    vertical: {
      left: "50%",
      transform: `translateX(-50%)`,
      _active: {
        transform: `translateX(-50%) scale(1.15)`,
      },
    },
    horizontal: {
      top: "50%",
      transform: `translateY(-50%)`,
      _active: {
        transform: `translateY(-50%) scale(1.15)`,
      },
    },
  })
}

const baseStyleContainer = (props: ThemeComponentProps) => {
  const { orientation } = props

  return {
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none",
    },
    ...orient({
      orientation,
      vertical: { h: "100%" },
      horizontal: { w: "100%" },
    }),
  }
}

function baseStyleTrack(props: ThemeComponentProps) {
  return {
    borderRadius: "sm",
    bg: mode("gray.200", "whiteAlpha.200")(props),
    _disabled: {
      bg: mode("gray.300", "whiteAlpha.300")(props),
    },
  }
}

function baseStyleThumb(props: ThemeComponentProps) {
  return {
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transition: "transform 0.2s",
    _focus: { boxShadow: "outline" },
    _disabled: { bg: "gray.300" },
    ...thumbOrientation(props),
  }
}

function baseStyleFilledTrack(props: ThemeComponentProps) {
  const { colorScheme: c } = props

  return {
    bg: mode(`${c}.500`, `${c}.200`)(props),
  }
}

const baseStyle = (props: ThemeComponentProps) => ({
  [parts.container]: baseStyleContainer(props),
  [parts.track]: baseStyleTrack(props),
  [parts.thumb]: baseStyleThumb(props),
  [parts.filledTrack]: baseStyleFilledTrack(props),
})

function sizeLg(props: ThemeComponentProps) {
  return {
    [parts.thumb]: { w: "16px", h: "16px" },
    [parts.track]: orient({
      orientation: props.orientation,
      horizontal: { h: "4px" },
      vertical: { w: "4px" },
    }),
  }
}

function sizeMd(props: ThemeComponentProps) {
  return {
    [parts.thumb]: { w: "14px", h: "14px" },
    [parts.track]: orient({
      orientation: props.orientation,
      horizontal: { h: "4px" },
      vertical: { w: "4px" },
    }),
  }
}

function sizeSm(props: ThemeComponentProps) {
  return {
    [parts.thumb]: { w: "10px", h: "10px" },
    [parts.track]: orient({
      orientation: props.orientation,
      horizontal: { h: "2px" },
      vertical: { w: "2px" },
    }),
  }
}

const size = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm,
}

const defaultVariants = {
  size: "md",
  colorScheme: "blue",
}

export default {
  baseStyle,
  variants: { size },
  defaultVariants,
}
