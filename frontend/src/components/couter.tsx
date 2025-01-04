'use client';

import CountUp from 'react-countup';

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {

  return (
    <h1 className="text-zinc-300 text-9xl leading-none md:text-center">
        <CountUp end={value} duration={2} delay={0} />+
    </h1>
  );
};

export default Counter;
