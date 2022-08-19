import { render } from "@wordpress/element";
import App from "./App.jsx";

/**
 * Import the stylesheet for the plugin.
 */
import "./style/main.scss";
import "rsuite/dist/rsuite.min.css";

// Render the App component into the DOM
render(<App />, document.getElementById("crm-app"));
