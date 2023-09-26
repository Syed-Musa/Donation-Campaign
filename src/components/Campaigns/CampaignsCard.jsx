import { Link } from "react-router-dom";

const CampaignsCard = ({campaigns}) => {

    const {id, picture, title, category, category_bg, card_bg, text_color} = campaigns || {}

  return (
    <div>
      <Link to={`/campaign/${id}`}>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="Shoes"/>
        </figure>
        <div className="card-body" style={{backgroundColor: card_bg}}>
          <h2 className="card-title">
            <div className="badge text-white" style={{backgroundColor: category_bg}}>{title}</div>
          </h2>
          <p className="text-xl font-bold" style={{color: text_color}}>{category}</p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CampaignsCard;
