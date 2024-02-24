import "./Product.css";
import card from "./assets/card.png";

export default function Product({ product }) {
  let tag = product.tag;
  let discount = product.discount;
  return (
    <div className="Product">
      {/* Image Index and Builder Info */}
      <div className="image">
        {tag ? (
          <div className="tag">
            <i class="fa-regular fa-gem"></i> {tag}
          </div>
        ) : (
          ""
        )}
        <p className="index">{product.index}</p>

        <img src={card} alt="cardImage" />
        <span className="builder">Builder 1</span>
      </div>

      {/* Product name, Description, Highlight Info */}
      <div className="information">
        {/* Title and Description */}
        <div className="title">
          <b>{product.title}- </b>
          {product.description}
        </div>
        {/* If discount Then we show discount label */}
        {discount ? <div className="discount">{discount}</div> : null}

        {/* Reviews and highlights */}
        <div className="reviews">
          <p className="highlight">
            <b>Main Highlights</b>
          </p>
          {/* If comments are more then 1 then we show them in list */}
          <p className="comment">
            {product.mainHighlights.length > 1 ? (
              <div className="commentsList">
                {product.mainHighlights.map((highlight) => (
                  <li>
                    <span className="highlightRating">{highlight.rating}</span>
                    <span>{highlight.comment}</span>
                  </li>
                ))}
              </div>
            ) : (
              <p>{product.mainHighlights[0].comment}</p>
            )}
          </p>
        </div>
        <p className="showMore">
          Show More <i className="fa-solid fa-angle-down"></i>
        </p>
      </div>

      {/* Rating and View Button */}
      <div className="ratings">
        <div className="rating">
          <span> {product.rating.count}</span>
          <p>{product.rating.avgRating}</p>
          {/* Start to show Rating */}
          {/* For these stars we can also pass the no of stars via props and run a loop to show  add that many stars*/}
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <button>View</button>
      </div>
    </div>
  );
}
