/* eslint-disable react/prop-types */
import CampaignsCard from "./CampaignsCard";

const Campaigns = ({campaigns}) => {
    console.log(campaigns)
    return (
        <div className="py-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-10">
                {
                    campaigns?.map(campaigns => <CampaignsCard key={campaigns.id} campaigns={campaigns}></CampaignsCard>)
                }
            </div>
        </div>
    );
};

export default Campaigns;