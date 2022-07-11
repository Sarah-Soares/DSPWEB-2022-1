import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";

import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<FirebaseContext.Provider value={new Firebase()}>
		<BrowserRouter>
			<App tab="home" />
		</BrowserRouter>
	</FirebaseContext.Provider>
);
