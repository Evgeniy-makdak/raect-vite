import Header from "./components/header/Header";
import "./index.css";
import TextBlock from "./components/TextBlock/TextBlock";

function App() {
  return (
    <div>
      <Header />
      <h1 className="mainTitle">React быстро</h1>
      <TextBlock isActive={true}/>
    </div>
  );
}

export default App;
