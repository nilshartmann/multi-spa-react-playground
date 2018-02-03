import * as React from "react";

import * as styles from "./HelloMessage.scss";
interface HelloMessageProps {
  greeting?: string;
  onAdd: (greeting: string) => void;
}

interface HelloMessageState {
  greeting: string;
}

export default class HelloMessage extends React.Component<
  HelloMessageProps,
  HelloMessageState
> {
  input: HTMLInputElement | null;

  constructor(props: HelloMessageProps) {
    super(props);
    this.state = { greeting: this.props.greeting || "" };
  }

  render() {
    return (
      <div className={styles.hellomsg}>
        <p>Enter a Greeting</p>
        <input
          ref={input => (this.input = input)}
          onChange={event => this.updateModel(event)}
          value={this.state.greeting}
        />
        <button onClick={() => this.props.onAdd(this.state.greeting)}>
          Add
        </button>
      </div>
    );
  }

  reset() {
    this.setState({ greeting: "" });
    this.input && this.input.focus();
  }

  updateModel(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ greeting: event.target.value });
  }
}
