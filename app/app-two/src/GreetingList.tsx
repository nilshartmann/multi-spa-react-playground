import * as React from "react";
import { Greeting } from "./types";

import * as styles from "./GreetingList.scss";

interface GreetingListProps {
  greetings: Greeting[];
  onRemove: (greeting: Greeting) => void;
}
export default function GreetingList({
  greetings,
  onRemove
}: GreetingListProps) {
  return (
    <div>
      <table>
        <tbody>
          {greetings.map(greeting => (
            <tr key={greeting.id}>
              <td>{greeting.greeting}</td>
              <td>
                <button
                  className={styles.removeButton}
                  onClick={() => onRemove(greeting)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
