import CampaignsCard from "./CampaignsCard";

const Campaigns = ({campaign}) => {
    console.log(campaign)
    return (
        <div className="py-10">
            {/* <h2 className="font-bold text-center">Campaigns</h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 py-10">
                {
                    campaign?.map(campaign => <CampaignsCard key={campaign.id} campaign={campaign}></CampaignsCard>)
                }
            </div>
        </div>
    );
};

export default Campaigns;