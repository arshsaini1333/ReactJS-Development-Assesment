import "./Footer.css";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="contact">
        <h4>Categories</h4>
        <p>Web Builders</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic Automation</p>
      </div>
      <div className="category">
        <h4>Contact</h4>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms of Services</p>
        <p>Category</p>
        <p>About</p>
      </div>
      <div className="us">
        <p>
          United State <i className="fa-solid fa-angle-down"></i>
        </p>
      </div>
    </div>
  );
}
