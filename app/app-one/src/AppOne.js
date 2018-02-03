import React from "react";
import styles from "./AppOne.css";
export default class AppOne extends React.Component {
  constructor(props) {
    super(props);

    //
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        <h1>
          Counter: <span style={{ color: "green" }}>{this.state.counter}</span>
        </h1>
        <button
          className={styles.counterButton}
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Count
        </button>
      </div>
    );
  }
}
