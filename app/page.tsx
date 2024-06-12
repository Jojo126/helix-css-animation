'use client'

import "./page.module.css";
import Spiral from "./Spiral";

export default function Home() {

  const theText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const cycles = 2;
  const animationDuration = 10;

  return (
    <div className='App'>
      <Spiral text={theText} cycles={cycles} duration={animationDuration} />
      <Spiral text={theText} cycles={cycles} duration={animationDuration} delay={animationDuration / 2} />
    </div>
  );
}
