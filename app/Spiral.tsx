import { useRef, useEffect, useState } from 'react';
import './Spiral.css';

function Spiral({text = 'Insert your text in the text prop to see it spin', cycles = 2, duration = 5, delay = 0}) {
  
  const textArray = text
    .replaceAll(' ', '\xa0')
    .split('');
  
  const wrapperRef = useRef<HTMLInputElement>(null);
  const [fontSize, setFontSize] = useState(`min(calc(100vw / ${textArray.length}), 50vh)`);
  const [vpSize, setVpSize] = useState<number[]>([]);

  useEffect(() => {
    const updateVpSize = () => {
      setVpSize([window.innerWidth, window.innerHeight])
    };
    window.addEventListener('resize', updateVpSize);
    return () => window.removeEventListener('resize', updateVpSize);
  }, [vpSize, textArray.length]);
  useEffect(() => {
    if(wrapperRef.current)
      setFontSize(`min(${wrapperRef.current.getBoundingClientRect().width / textArray.length}px, 50vh)`);
  }, [vpSize, textArray.length]);

  return (
    <div ref={wrapperRef} className='spiralWrapper'>
      {textArray.map((char, i) => 
        <span className='char' key={i} style={{
          fontSize: fontSize,
          animationDelay: `${-duration/textArray.length * cycles * i - delay}s`,
          animationDuration: `${duration}s`
        }}>{char}</span>
      )}
    </div>
  );
}

export default Spiral;