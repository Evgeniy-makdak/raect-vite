import Header from "./components/header/Header";
import { ways, differences } from "./data";
import OurDescription from "./components/OurDescription";
import "./index.css";
import Button from "./components/button/Button";
import { useState } from "react";

function App() {
const [title, setTitle] = useState("Выбери нужный тебе раздел:");

  function buttonClick(title) {
    setTitle(title)
  }
  return (
    <div>
      <Header />
      <h1 className="mainTitle">React быстро</h1>
      <section>
        <h2>{differences[title]}</h2>
        <ul>
          <OurDescription {...ways[0]} />
          <Button {...ways[0]} onClick={() => buttonClick("way")} />
          <OurDescription {...ways[1]} />
          <Button {...ways[1]} onClick={() => buttonClick("easy")} />
          <OurDescription {...ways[2]} />
          <Button {...ways[2]} onClick={() => buttonClick("program")} />
          <OurDescription {...ways[3]} />
          <Button {...ways[3]} onClick={() => buttonClick("result")} />
        </ul>
      </section>
    </div>
  );
}

export default App;
