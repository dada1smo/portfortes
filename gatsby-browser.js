// normalize CSS across browsers
import "./src/normalize.css"
import "./src/global.scss"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

// Fonts
require("typeface-space-mono");
require("typeface-archivo");

// This ensures that the icon CSS is loaded immediately before attempting to render icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;