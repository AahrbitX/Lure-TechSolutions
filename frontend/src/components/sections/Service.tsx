import Cards from "../cards";
import Heading from "../heading";

const Service = () => {
    return (
        <div className="sections h-[900px]">
            <Heading value={"Our Service"} />
            
            {/* Each Cards component can be customized individually */}
            <div>
                <Cards />
            </div>
        </div>
    );
};

export default Service;
