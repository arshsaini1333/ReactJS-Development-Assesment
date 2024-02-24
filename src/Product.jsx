import "./Product.css";
import card from "./assets/card.png";

export default function Product({ product }) {
  let tag = product.tag;
  let discount = product.discount;
  return (
    <div className="Product">
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
      <div className="information">
        <div className="title">
          <b>{product.title}- </b>
          {product.description}
        </div>
        {discount ? <div className="discount">{discount}</div> : null}
        <div className="reviews">
          <p className="highlight">
            <b>Main Highlights</b>
          </p>

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
      <div className="ratings">
        <div className="rating">
          <span> {product.rating.count}</span>
          <p>{product.rating.avgRating}</p>
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
