import * as React from "react";
import * as ReactDOM from "react-dom";

import * as styles from "./App.scss";
import HelloMessage from "./HelloMessage";
import GreetingList from "./GreetingList";
import { Greeting } from "./types";

interface AppState {
  greetings: Greeting[];
}

let counter = 0;

export default class App extends React.Component<{}, AppState> {
  state: AppState = { greetings: [] };
  render() {
    return (
      <div className={styles.app}>
        <h1>Application two</h1>
        <p>Running React {React.version}</p>
        <HelloMessage onAdd={this.addGreeting} greeting="Hello" />

        <GreetingList
          greetings={this.state.greetings}
          onRemove={this.removeGreeting}
        />
      </div>
    );
  }

  removeGreeting = (greeting: Greeting) => {
    const existingGreetings = [...this.state.greetings];
    const index = existingGreetings.indexOf(greeting);
    existingGreetings.splice(index, 1);
    this.setState({ greetings: existingGreetings });
  };

  addGreeting = (newGreeting: string) => {
    const newGreetings = [
      ...this.state.greetings,
      { greeting: newGreeting, id: counter++ }
    ];

    this.setState({
      greetings: newGreetings
    });
  };
}
