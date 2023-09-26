import { useLoaderData } from "react-router-dom";
import Campaigns from "../../Campaigns/Campaigns";
import Banner from "../../Header/Banner/Banner";

const Home = () => {

    const campaigns = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Campaigns campaigns ={campaigns}></Campaigns>
        </div>
    );
};

export default Home;