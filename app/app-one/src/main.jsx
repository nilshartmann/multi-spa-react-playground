import React from "react";
import ReactDOM from "react-dom";
import AppOne from "./AppOne";

import styles from "./main.css";

ReactDOM.render(
  <div className={styles.app}>
    <h1>Application one</h1>
    <p>This is app number one, running on React {React.version}</p>
    <AppOne />
  </div>,
  document.getElementById("main")
);
