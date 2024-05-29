import { defineProperties, createRainbowSprinkles } from "rainbow-sprinkles";
import { createContainer, style } from "@vanilla-extract/css";
import { modularScale, size } from "polished";
import { colors } from "./colors";
// We have to reexport SprinklesFn from rainbow-sprinkles to make it available
// in the generated declaration file. Otherwise we get the error:
//
//    Error TS2742: The inferred type of 'getStyle' cannot be named without a reference
//    to '../node_modules/rainbow-sprinkles/dist/declarations/src/createRuntimeFn'.
//    This is likely not portable. A type annotation is necessary.
export type { SprinklesFn } from "rainbow-sprinkles/createRuntimeFn";

const respContainerName = createContainer("ve-enpage-page");

export const responsiveContainer = style({
  containerName: respContainerName,
  containerType: "size",
});

const createRemScale =
  (base: number, ratio?: Parameters<typeof modularScale>[2]) =>
  (steps: number) =>
    `${Number.parseFloat(modularScale(steps, base, ratio)).toFixed(3)}rem`;

const spaceScale = createRemScale(0.15);
const sizeScale = createRemScale(0.125);

const vars = {
  margin: {
    auto: "auto",
    px: "1px",
    xs: spaceScale(1),
    sm: spaceScale(2),
    md: spaceScale(3),
    lg: spaceScale(4),
    xl: spaceScale(5),
    "2xl": spaceScale(6),
    "3xl": spaceScale(7),
    "4xl": spaceScale(8),
    "5xl": spaceScale(9),
    "6xl": spaceScale(10),
    "7xl": spaceScale(11),
  },
  padding: {
    // no auto for padding
    px: "1px",
    xs: spaceScale(1),
    sm: spaceScale(2),
    md: spaceScale(3),
    lg: spaceScale(4),
    xl: spaceScale(5),
    "2xl": spaceScale(6),
    "3xl": spaceScale(7),
    "4xl": spaceScale(8),
    "5xl": spaceScale(9),
    "6xl": spaceScale(10),
    "7xl": spaceScale(11),
  },
  width: {
    "0": "0px",
    "0.5": sizeScale(0),
    "1": sizeScale(1),
    "1.5": sizeScale(1.5),
    "2": sizeScale(2),
    "2.5": sizeScale(2.5),
    "3": sizeScale(3),
    "3.5": sizeScale(3.5),
    "4": sizeScale(4),
    "5": sizeScale(5),
    "6": sizeScale(6),
    "7": sizeScale(7),
    "8": sizeScale(8),
    "9": sizeScale(9),
    "10": sizeScale(10),
    "11": sizeScale(11),
    "12": sizeScale(12),
    "14": sizeScale(14),
    "16": sizeScale(16),
    "20": sizeScale(20),
    "24": sizeScale(24),
    "28": sizeScale(28),
    "32": sizeScale(32),
    "36": sizeScale(36),
    "40": sizeScale(40),
    "44": sizeScale(44),
    "48": sizeScale(48),
    "52": sizeScale(52),
    "56": sizeScale(56),
    none: "none",
    px: "1px",
    full: "100%",
    screen: "100vw",
    svh: "100vh",
    dvh: "100vh",
    lvh: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
};

export const properties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": `screen and (min-width: 448px)` },
    desktop: { "@media": `screen and (min-width: 768px)` },
    hover: { selector: "&:hover" },
  },
  defaultCondition: "mobile",
  staticProperties: {
    display: [
      "block",
      "flex",
      "inline-block",
      "inline-flex",
      "grid",
      "inline-grid",
      "none",
    ],
    userSelect: ["none", "text", "all", "auto"],
    textAlign: ["left", "center", "right"],
    outline: {
      "current-block": "3px dotted rgba(114, 112, 198, 0.6)",
    },
    outlineOffset: {
      inner: "-4px",
      outer: "4px",
      none: "0",
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "2.5rem",
    },
    lineHeight: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.75rem",
      xl: "1.75rem",
      "2xl": "1.75rem",
      "3xl": "1.75rem",
      "4xl": "1.75rem",
      "5xl": "1.75rem",
    },
    gridAutoFlow: ["row", "column"],
    flexDirection: ["row", "column"],
    placeContent: ["center", "start", "end", "between", "around"],
    placeItems: ["center", "start", "end", "stretch"],
    placeSelf: ["center", "start", "end", "stretch"],
    justifyContent: ["center", "start", "end", "between", "around"],
    justifySelf: ["center", "start", "end", "stretch"],
    alignItems: ["center", "start", "end", "stretch"],
    alignSelf: ["center", "start", "end", "stretch"],
    flexWrap: ["wrap", "nowrap"],
    flexShrink: ["0", "1"],
    flexGrow: ["0", "1"],
    flexBasis: ["0", "auto"],
    overflow: ["hidden", "auto", "scroll", "visible"],
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    backgroundRepeat: [
      "no-repeat",
      "repeat",
      "repeat-x",
      "repeat-y",
      "space",
      "round",
    ],
    backgroundSize: ["auto", "cover", "contain"],
    backgroundPosition: ["top", "right", "bottom", "left", "center"],
    borderStyle: ["solid", "dashed", "dotted", "double", "none"],
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      md: "0.25rem",
      lg: "0.375rem",
      xl: "0.5rem",
      "2xl": "0.75rem",
      "3xl": "1rem",
      full: "9999px",
    },
    width: {
      max: "max-content",
      min: "min-content",
      fit: "fit-content",
      auto: "auto",
      full: "100%",
      dvw: "100dvw",
      svw: "100svw",
      lvw: "100lvw",
    },
    minWidth: {
      max: "max-content",
      min: "min-content",
      fit: "fit-content",
      full: "100%",
      dvw: "100dvw",
      svw: "100svw",
      lvw: "100lvw",
    },
    maxWidth: {
      max: "max-content",
      min: "min-content",
      fit: "fit-content",
      full: "100%",
      dvw: "100dvw",
      svw: "100svw",
      lvw: "100lvw",
      prose: "65ch",
      "screen-sm": "640px",
      "screen-md": "768px",
      "screen-lg": "1024px",
      "screen-xl": "1280px",
      "screen-2xl": "1536px",
    },
    height: {
      max: "max-content",
      min: "min-content",
      fit: "fit-content",
      auto: "auto",
      full: "100%",
      dvh: "100dvh",
      svh: "100svh",
      lvh: "100lvh",
    },

    minHeight: {
      max: "max-content",
      min: "min-content",
      fit: "fit-content",
      full: "100%",
      screen: "100vh",
      dvh: "100dvh",
      svh: "100svh",
      lvh: "100lvh",
    },
    maxHeight: {
      px: "1px",
      max: "max-content",
      min: "min-content",
      fit: "fit-content",
      full: "100%",
      screen: "100vh",
      dvh: "100dvh",
      svh: "100svh",
      lvh: "100lvh",
      none: "none",
    },
    zIndex: {
      auto: "auto",
      "0": "0",
      "10": "10",
      "20": "20",
      "30": "30",
      "40": "40",
      "50": "50",
      "9999": "9999",
    },
    border: {
      none: "none",
      xs: "1px solid",
      sm: "2px solid",
      md: "4px solid",
    },
    boxShadow: {
      xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      sm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "0 0 #0000",
    },
    fontWeight: ["300", "400", "500", "600", "700", "800"],
    color: colors,
    columnRuleColor: colors,
    background: colors,
    backgroundColor: colors,
    borderColor: colors,
    fill: colors,
    stroke: colors,
    textDecorationColor: colors,
    textEmphasisColor: colors,
  },
  dynamicProperties: {
    padding: vars.padding,
    paddingLeft: vars.padding,
    paddingRight: vars.padding,
    paddingTop: vars.padding,
    paddingBottom: vars.padding,
    margin: vars.margin,
    marginLeft: vars.margin,
    marginRight: vars.margin,
    marginTop: vars.margin,
    marginBottom: vars.margin,
    width: true,
    height: true,
    minWidth: true,
    minHeight: true,
    top: true,
    right: true,
    bottom: true,
    left: true,
    background: true,
    backgroundColor: true,
    backgroundSize: true,
    backgroundPosition: true,
    opacity: true,
    columnRuleColor: true,
    borderColor: true,
    fill: true,
    stroke: true,
    textDecorationColor: true,
    textEmphasisColor: true,
    zIndex: true,
    transform: true,
    boxShadow: true,
  },
  shorthands: {
    m: ["margin"],
    mr: ["marginRight"],
    ml: ["marginLeft"],
    mt: ["marginTop"],
    mb: ["marginBottom"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    p: ["padding"],
    pr: ["paddingRight"],
    pl: ["paddingLeft"],
    pt: ["paddingTop"],
    pb: ["paddingBottom"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    rounded: ["borderRadius"],
    bg: ["background"],
    bgc: ["backgroundColor"],
    text: ["color"],
    w: ["width"],
    h: ["height"],
    size: ["width", "height"],
  },
});

export const nativeStyle = createRainbowSprinkles(properties);

export type Styles = Parameters<typeof nativeStyle>[0];
