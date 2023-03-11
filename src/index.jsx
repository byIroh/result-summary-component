import React from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/hanken-grotesk/500.css";
import "@fontsource/hanken-grotesk/700.css";
import "@fontsource/hanken-grotesk/800.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(<App />);