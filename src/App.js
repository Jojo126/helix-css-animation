import Spiral from './Spiral';
import './App.css';

function App() {

  const theText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const cycles = 3;
  const animationDuration = 10;

  return (
    <div className='App'>
      <Spiral text={theText} cycles={cycles} duration={animationDuration} />
      <Spiral text={theText} cycles={cycles} duration={animationDuration} delay={animationDuration / 2} />
    </div>
  );
}

export default App;
