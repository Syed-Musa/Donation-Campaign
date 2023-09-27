import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {

    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [IsShow, setIsShow] = useState(false);

    useEffect(()=>{
        const donateItem = JSON.parse(localStorage.getItem("text"));
        if(donateItem){
            setDonations(donateItem)
        }else{
            setNoFound('No Data Found')
        }
    }, []);

    return (
        <div>
            {
            
            noFound ? <p className="h-[80vh] flex justify-center items-center text-3xl font-bold">{noFound}</p> : <div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                        IsShow ? donations?.map(campaign => <DonationCard key={campaign.id} campaign={campaign}></DonationCard>)

                        : donations?.slice(0, 4).map(campaign => <DonationCard  key={campaign.id} campaign={campaign}></DonationCard>)
                    }
                </div>

                {
                    donations.length > 4 && <button onClick={()=>setIsShow(!IsShow)} className="p-5 rounded-lg bg-[#009444] px-5 mx-auto text-white block my-5">{IsShow ? "See Less" : "See More"}</button>
                }

                </div>
            }
        </div>
    );
};

export default Donation;