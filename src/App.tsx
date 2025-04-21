import { useState } from "react";

import Editor from "./Editor";
import Preview from "./Preview";
import Settings from "./Settings";
function App() {
  const [view, setView] = useState<"editor" | "preview" | "settings">("editor");

  const views = {
    editor: <Editor />,
    preview: <Preview />,
    settings: <Settings />,
  };
  return (
    <>
      <button type="button" onClick={() => setView("preview")}>
        Preview
      </button>
      <button type="button" onClick={() => setView("editor")}>
        Editor
      </button>
      <button type="button" onClick={() => setView("settings")}>
        Settings
      </button>

      {views[view]}
    </>
  );
}

export default App;
