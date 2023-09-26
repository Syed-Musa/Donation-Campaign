const DonationCard = ({campaign}) => {

  const { discrippicture, title, category, category_bg, card_bg, price, text_color, btn_color} = campaign || {}


  return (
    <div className="card card-side shadow-xl">
      <figure>
        <img className="w-60 h-60" src={discrippicture} alt="Movie"/>
      </figure>
      <div className="card-body" style={{backgroundColor: card_bg}}>
        <p className="badge text-white" style={{backgroundColor: category_bg}}>{title}</p>
        <h2 className="card-title text-xl font-bold" style={{color: text_color}}>{category}</h2>
        <p className="font-bold" style={{color: text_color}}>{price}.00</p>
        
        <div className="card-actions">
          <button className="btn text-white" style={{backgroundColor :btn_color}}>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
