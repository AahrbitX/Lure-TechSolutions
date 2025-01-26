'use client';

interface CounterProps {
  value: string;
  color?: string;
}

const Heading: React.FC<CounterProps> = ({ value, color = "black" }) => {
  return (
    <h1 
      className={`w-full justify-center font-bold md:text-6xl text-2xl text-center flex pt-20 ${color === "white" ? "text-white" : "text-black"}`}
      style={{ color }}>
      {value}
    </h1>
  );
};
export default Heading;