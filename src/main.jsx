import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// ✅ Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// ✅ (Optional) Import Bootstrap JS bundle if using modals, dropdowns, etc.
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./index.css"; // Your own custom styles (if any)
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
