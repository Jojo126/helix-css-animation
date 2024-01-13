import './App.css';

function App() {

  const theText = 'Lorem ipsum dolor sit amet.';
  const textArray = theText
    .replaceAll(' ', '\xa0')
    .split('');
  const animationDuration = 10;
  const cycles = 2;

  return (
    <body>
      <div className='spiralWrapper'>
        {textArray.map((char, i) => 
          <span className='char' key={i} style={{
            animationDelay: `${-animationDuration/textArray.length * cycles * i}s`,
            animationDuration: `${animationDuration}s`
          }}>{char}</span>
        )}
      </div>
      <div className='spiralWrapper'>
        {textArray.map((char, i) => 
          <span className='char' key={i} style={{
            animationDelay: `${-animationDuration/textArray.length * cycles * i - animationDuration/2}s`,
            animationDuration: `${animationDuration}s`
          }}>{char}</span>
        )}
      </div>
    </body>
  );
}

export default App;
