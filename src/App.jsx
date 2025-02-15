import Header from "./components/header/Header";
import { ways } from "./data";
import OurDescription from "./components/OurDescription";
import "./index.css";
import Button from "./components/button/Button";

function App() {
  function buttonClick(context) {
    console.log(context);
  }
  return (
    <div>
      <Header />
      <h1 className="mainTitle">React быстро</h1>
      <section>
        <ul>
          <OurDescription {...ways[0]} />
          <Button {...ways[0]} onClick={() => buttonClick('пропсы')} />
          <OurDescription {...ways[1]} />
          <Button {...ways[1]} onClick={() => buttonClick('*******')} />
          <OurDescription {...ways[2]} />
          <Button {...ways[2]} onClick={() => buttonClick('-------')} />
          <OurDescription {...ways[3]} />
          <Button {...ways[3]} onClick={() => buttonClick('#######')} />
        </ul>
      </section>
    </div>
  );
}

export default App;
