import * as React from "react";
import * as ReactDOM from "react-dom";

import HelloMessage from "./HelloMessage";
import App from "./app";

const mountNode = document.getElementById("mount-two");

ReactDOM.render(<App />, mountNode);
