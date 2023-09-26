import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CampainCard from "./CampainCard";

const Campaign = () => {
  const [campaign, setCampaignCard] = useState([]);

  const { id } = useParams();

  const campaigns = useLoaderData();
  

  useEffect(() => {
    const findCampaign = campaigns?.find(campaign => campaign.id == id);
    setCampaignCard(findCampaign);
  }, [campaigns, id]);
  

  return (
    <div>
      {
         <CampainCard campaign={campaign}></CampainCard>
      }
    </div>
  );
};

export default Campaign;
