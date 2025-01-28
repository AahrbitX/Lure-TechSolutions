import Cards from "../cards";
import Heading from "../heading";
import { TextAnimate } from "../ui/text-animate";


const Service = () => {
    return (
        <div className="h-[900px] w-screen overflow-hidden md:pt-60">
            
            <TextAnimate animation="slideLeft" by="character" className="md:text-6xl text-2xl w-full flex justify-center items-center text-white font-bold">
                Service We Offeres
            </TextAnimate>

            <div className="md:pt-20 md:pb-20">
                <Cards />
            </div>
        </div>
    );
};

export default Service;