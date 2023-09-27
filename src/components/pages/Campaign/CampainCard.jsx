/* eslint-disable react/prop-types */
import swal from "sweetalert";

const CampainCard = ({campaign}) => {

    const {id, discrippicture, category, discription, price, btn_color} = campaign || {}

    const handleAddToDonate = ()=>{
      const addedDonateArrays = [];

      const donateItem = JSON.parse(localStorage.getItem("text"));
      if(!donateItem){
          addedDonateArrays.push(campaign);
          localStorage.setItem('text', JSON.stringify(addedDonateArrays));
          swal("Good job!", "Your Donation has successfully!", "success");

      }else{

        const isExits = donateItem.find(campaign => campaign.id == id);

        if(!isExits){
          addedDonateArrays.push(...donateItem, campaign);
          localStorage.setItem('text', JSON.stringify(addedDonateArrays));
          swal("Good job!", "Your Donation has successfully!", "success");
        }else{
          swal("Sorry!", "Your Donation is already exit!", "error");
        }        
      }
    }

  return (
    <div>
      <div className="relative">
        <img className="w-[1200px] lg:h-[700px] object-cover" src={discrippicture} alt="" />
      </div>
      
      <div className=" -absolute bottom-0 bg-[#00000080] hero-overlay opacity-50 w-[340px] lg:w-[1200px] p-3">
        <button onClick={handleAddToDonate} className=" btn text-white" style={{backgroundColor: btn_color}}>Donate{price}</button>
      </div>

      <div >
        <h2 className="text-3xl font-bold py-5 ">{category}</h2>
        
      </div >
      <p className=" lg:w-[1200px]">{discription}</p>
      
    </div>
  );
};

export default CampainCard;
