import Cards from "../cards";
import Heading from "../heading";

const Service = () => {
    return (
        <div className="h-[900px] w-screen overflow-hidden">
            <Heading value={"What We Offer"} color="white" />
            <div className="md:pt-20 md:pb-20">
                <Cards />
            </div>
        </div>
    );
};

export default Service;