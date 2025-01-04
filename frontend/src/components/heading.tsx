'use client';

interface CounterProps {
  value: string;
  color?: string;
}

const Heading: React.FC<CounterProps> = ({ value, color = "black" }) => {
  return (
    <h1 
      className={`w-full justify-center xl:text-7xl md:text-6xl sm:text-5xl text-center flex font-normal ${color === "white" ? "text-white" : "text-black"}`}
      style={{ color }}>
      {value}
    </h1>
  );
};
export default Heading;