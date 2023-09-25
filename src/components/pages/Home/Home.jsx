import { useLoaderData } from "react-router-dom";
import Campaigns from "../../Campaigns/Campaigns";
import Banner from "../../Header/Banner/Banner";

const Home = () => {

    const campaign = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Campaigns campaign ={campaign}></Campaigns>
        </div>
    );
};

export default Home;