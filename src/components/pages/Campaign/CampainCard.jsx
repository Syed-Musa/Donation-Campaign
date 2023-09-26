
const CampainCard = ({campaign}) => {

    const {id, discrippicture, category, discription, price, btn_color} = campaign || {}
    const handleAddToDonate = ()=>{
      console.log(campaign)
    }

  return (
    <div>
      <div className="relative">
        <img className="w-[1200px] h-[700px] object-cover" src={discrippicture} alt="" />
      </div>
      
      <div className=" -absolute bottom-0 bg-[#00000080] opacity-90 w-[1200px] p-3">
        <button onClick={handleAddToDonate} className=" btn text-white" style={{backgroundColor: btn_color}}>Donate{price}</button>
      </div>

      <div >
        <h2 className="text-3xl font-bold py-5 ">{category}</h2>
        
      </div >
      <p className="w-[1200px]">{discription}</p>
      
    </div>
  );
};

export default CampainCard;
