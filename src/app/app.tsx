import { useState } from "react";
import styles from "./app.module.scss";
import Input from "../shared/ui/input";

function App() {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className={styles.app}>
      <div>
        <h2>Example Form</h2>

        <Input
          theme="light"
          size="input"
          placeholder="Enter text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <br/>
        <br/>

        <Input
          theme="light"
          size="textarea"
          placeholder="Enter text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Input
          theme="dark"
          size="input"
          placeholder="Enter text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        
        <br/>
        <br/>

        <Input
          theme="dark"
          size="textarea"
          placeholder="Enter text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <br />
      </div>
    </div>
  );
}

export default App;
