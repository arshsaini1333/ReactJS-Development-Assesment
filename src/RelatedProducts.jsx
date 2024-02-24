import "./RelatedProducts.css";
import card from "./assets/card.png";

export default function RelatedProducts({ product }) {
  return (
    // Image
    <div className="RelatedProducts">
      <div className="img">
        <img src={card} alt="CardImage" />
      </div>
      {/* Offers */}
      <div className="offer">
        <span>20% off</span>
        <span>Limited time</span>
      </div>
      {/* Title and Descriptipn */}
      <div className="info">
        <span>
          <b>{product.title}</b>
        </span>
        <p>{product.description}</p>
      </div>
      {/* Displaying About Price and Discount */}
      <div className="price">
        <span className="newPrice">{product.newPrice}</span>
        <span className="oldPrice">{product.oldPrice}</span>
        <span className="discount">({product.discount})</span>
      </div>
      <button>View Details</button>
    </div>
  );
}
