import Cards from "../cards";
import Heading from "../heading";

const Service = () => {
    return (
        <div className="sections h-[900px] pt-40">
            <Heading value={"Services We Provide"} color="white" />
            <div className="pt-20 pb-20">
                <Cards />
            </div>
        </div>
    );
};

export default Service;