import "./Body.css";
import LowerSection from "./LowerSection";
import UpperSection from "./UpperSection";
import ProductTab from "./ProductTab";
import RelatedProductTab from "./RelatedProductTab";

export default function Body() {
  return (
    <div className="Body">
      <UpperSection />
      <ProductTab />
      <RelatedProductTab />
      <LowerSection />
    </div>
  );
}
