import Header from './components/header/Header';
import { ways } from './data';
import OurDescription from './components/OurDescription';
import './index.css';
import Button from './components/button/Button';

function App() {
  return (
    <div>
      <Header />
      <h1 className="mainTitle">React быстро</h1>
      <section>
        <ul>
          <OurDescription {...ways[0]} />
          <Button {...ways[0]}/>
          <OurDescription {...ways[1]} />
          <Button {...ways[1]}/>
          <OurDescription {...ways[2]} />
          <Button {...ways[2]}/>
          <OurDescription {...ways[3]} />
          <Button {...ways[3]}/>
        </ul>
      </section>
    </div>
  );
}

export default App;
