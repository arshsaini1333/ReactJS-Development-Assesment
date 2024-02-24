import RelatedProducts from "./RelatedProducts";
import "./RelatedProductTab.css";
export default function RelatedProductTab() {
  let product1 = {
    title: "Webbuilder 1",
    description: "Computer  Modern clasic with wix support",
    newPrice: "$39.96",
    oldPrice: "$49.96",
    discount: "20% Off",
  };
  return (
    <>
      <p className="relatedHeading">Related deals you might like for</p>
      <div className="RelatedProductTab">
        <RelatedProducts product={product1} />
        <RelatedProducts product={product1} />
        <RelatedProducts product={product1} />
      </div>
    </>
  );
}
