import { globalFontFace } from "@vanilla-extract/css";

// Register our fonts
globalFontFace("test", {
  src: `url('${require("../fonts/roboto-regular.woff2")}') format('woff2'), url('${require("../fonts/roboto-regular.woff")}') format('woff')`,
  fontStyle: "normal",
  fontWeight: "normal",
  fontDisplay: "block",
});
