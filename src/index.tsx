import * as React from "react";
import { createRoot } from "react-dom/client";
import { Routes as App } from "./main/routes";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(<App />);
