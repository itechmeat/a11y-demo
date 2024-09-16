import { useRef } from "react";
import "./App.css";

function App() {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <div>
        <div>
          <h1>Welcome bro!</h1>
          <p>We invite you!</p>
        </div>

        <div>
          <button tabIndex={1} onClick={() => dialog.current?.show()}>
            Show me dialog
          </button>
        </div>
      </div>

      <dialog
        ref={dialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        tabIndex={-1}
        onCancel={() => dialog.current?.close()}
      >
        <main>
          <h2 id="dialog-title">Dance dance dance</h2>
          <p id="dialog-description">Lolololo</p>
          <p>
            <label aria-label="Checking label">
              <input type="checkbox" aria-label="Donald Trump" /> Forest Gump
            </label>
          </p>
          <div>
            <button
              aria-label="Close me"
              onClick={() => dialog.current?.close()}
            >
              <span aria-hidden="true">X</span>
            </button>
          </div>
        </main>
      </dialog>
    </div>
  );
}

export default App;
