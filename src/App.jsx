import Header from "./components/header/Header";
import { ways, differences } from "./data";
import OurDescription from "./components/OurDescription";
import "./index.css";
import Button from "./components/button/Button";
import TextBlock from "./components/TextBlock/TextBlock";
import { useState } from "react";

function App() {
const [contentType, setContentType] = useState(null)

  function buttonClick(title) {
    setContentType(title)
  }
  return (
    <div>
      <Header />
      <h1 className="mainTitle">React быстро</h1>
      <section>
        <h2>{differences[contentType]}</h2>
        <ul>
          {/* {ways.map((way) => (
            <li key={way.title}>
              <OurDescription {...way} />
              <Button {...way} isActive={contentType === way.title} onClick={() => buttonClick(way.title)} />
            </li>
          ))} */}
          <OurDescription {...ways[0]} />
          <Button {...ways[0]} isActive={contentType === 'way'} onClick={() => buttonClick("way")} />
          <OurDescription {...ways[1]} />
          <Button {...ways[1]} isActive={contentType === 'easy'} onClick={() => buttonClick("easy")} />
          {/* <OurDescription {...ways[2]} />
          <Button {...ways[2]} isActive={contentType === 'program'} onClick={() => buttonClick("program")} />
          <OurDescription {...ways[3]} />
          <Button {...ways[3]} isActive={contentType === 'result'} onClick={() => buttonClick("result")} /> */}
        </ul>
      </section>
      <TextBlock />
    </div>
  );
}

export default App;
