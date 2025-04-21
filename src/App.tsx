import { useState } from "react";

import Editor from "./Editor";
import Preview from "./Preview";
function App() {
  const [view, setView] = useState<"editor" | "preview">("editor");

  return (
    <>
      {view === "editor" && (
        <section>
          <button type="button" onClick={() => setView("preview")}>
            preview
          </button>
          <Editor />
        </section>
      )}
      {view === "preview" && (
        <section>
          <button type="button" onClick={() => setView("editor")}>
            editor
          </button>
          <Preview />
        </section>
      )}
    </>
  );
}

export default App;
