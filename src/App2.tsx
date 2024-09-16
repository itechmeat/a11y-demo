import { useRef, useState } from "react";
import "./App.css";

function App() {
  const modal = useRef<HTMLDivElement>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <main>
        <h1>Welcome bro!</h1>
        <p>We invite you!</p>

        <footer>
          <button
            tabIndex={2}
            onClick={() => {
              setIsModalVisible(!isModalVisible);
              modal.current?.focus();
            }}
          >
            {isModalVisible ? "Hide me modal" : "Show me modal"}
          </button>
        </footer>
      </main>

      <div
        hidden={!isModalVisible}
        ref={modal}
        aria-modal="true"
        role="dialog"
        aria-live="polite"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        tabIndex={-1}
      >
        <div>
          <h2 id="dialog-title">Dance dance dance</h2>
          <p id="dialog-description">Lolololo</p>
          <p>
            <label>
              <input type="checkbox" aria-label="Checkbox" /> Check me
            </label>
          </p>
          <footer>
            <button
              aria-label="Close me"
              onClick={() => setIsModalVisible(false)}
            >
              <span aria-hidden="true">X</span>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
