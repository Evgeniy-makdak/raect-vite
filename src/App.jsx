import Header from "./components/header/Header";
import Field from "./components/textBlock/Field";
import "./index.css";
import TextBlock from "./components/TextBlock/TextBlock";

function App() {
  return (
    <div>
      <Header />
      <h1 className="mainTitle">React быстро</h1>
      <TextBlock isActive={true}/> <br />
      <Field name = "John" age = "30" education = "higth" />
    </div>
  );
}

export default App;
