import "./RelatedProducts.css";
import card from "./assets/card.png";

export default function RelatedProducts({ product }) {
  return (
    <div className="RelatedProducts">
      <div className="img">
        <img src={card} alt="CardImage" />
      </div>
      <div className="offer">
        <span>20% off</span>
        <span>Limited time</span>
      </div>
      <div className="info">
        <span>
          <b>{product.title}</b>
        </span>
        <p>{product.description}</p>
      </div>
      <div className="price">
        <span className="newPrice">{product.newPrice}</span>
        <span className="oldPrice">{product.oldPrice}</span>
        <span className="discount">({product.discount})</span>
      </div>
      <button>View Details</button>
    </div>
  );
}
