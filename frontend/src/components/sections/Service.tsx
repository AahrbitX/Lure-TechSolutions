import Cards from "../cards";
import Heading from "../heading";

const Service = () => {
    return (
        <div className="h-[900px] w-screen overflow-hidden">
            <Heading value={"Services We Provide"} color="white" />
            <div className="pt-20 pb-20">
                <Cards />
            </div>
        </div>
    );
};

export default Service;