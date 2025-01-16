import NumberTicker from "./ui/number-ticker";

export function NumberTickerDemo({value=0,text=""}) {
  return (

    <div className="h-fit rounded-3xl ">
        <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-white flex justify-center items-center">
            <NumberTicker value={value} /> +
        </p>

        <p className="w-full flex items-center text-2xl font-bold justify-end text-cgreen">{text}</p>

    </div>

  );
}
