import "./UpperSection.css";
export default function UpperSection() {
  return (
    <div className="UpperSection">
      <h6>Best Website builders in the US</h6>

      <div className="updateBar">
        <div className="left">
          <i className="fa-regular fa-circle-check"></i>
          <span>Last Update - February 22, 2020</span>
        </div>
        <div className="left">
          <i className="fa-solid fa-circle-info"></i>
          <span>Advertising Disclosure</span>
        </div>
        <div className="right">
          <span>Top Relevant</span>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>

      <div className="Tools">
        <span>Tools</span>
        <span>AWS Builder</span>
        <span>Start Build</span>
        <span>Build Supplies</span>
        <span>Tooling</span>
        <span>BlueHosting</span>
      </div>
      <div className="Path">
        <span>Home</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Hosting For All</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Hosting</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Hosting6</span>
        <i className="fa-solid fa-chevron-right"></i>
        <span>Hosting5</span>
      </div>
    </div>
  );
}
