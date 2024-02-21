import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Example from "./components/Graphics";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
  
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <Example>

      </Example>
    </div>
  );
}

export default App;
