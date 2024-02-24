import Product from "./Product";
export default function ProductTab() {
  //Product 1
  let product1 = {
    index: "1",
    title: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights: [
      {
        rating: null,
        comment:
          "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      },
    ],
    rating: { count: "9.8", avgRating: "Exceptional" },
    tag: "Best Choice",
  };

  //Prodcut 2
  let product2 = {
    index: "2",
    title: "SiteCraft 68-Inch Ultimate Web Design Studio",
    description:
      "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    mainHighlights: [
      {
        rating: null,
        comment:
          "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      },
    ],
    rating: { count: "9.5", avgRating: "Excellent" },
    tag: "Best Value",
  };

  //Product 3
  let product3 = {
    index: "3",
    title: "WixPro 72-Inch Responsive Website Builder",
    description:
      "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    mainHighlights: [
      {
        rating: null,
        comment:
          "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      },
    ],
    rating: { count: "9.8", avgRating: "Exceptional" },
  };

  //Product 4
  let product4 = {
    index: "4",
    title: "CDK Resposive Builder",
    description:
      " An extensive library of widgets and apps, and detailed step-by-step guides",
    discount: "25% off",
    mainHighlights: [
      {
        rating: 9.9,
        comment: "Build Responsive",
      },
      {
        rating: 8.9,
        comment: "Cool",
      },
      {
        rating: 8.9,
        comment: "Docs",
      },
    ],
    rating: { count: "9.1", avgRating: "Very Good" },
    other: ["Documentation", "Easy Use", "Out of Box"],
  };

  return (
    <>
      {/* Passing our props to  the product component*/}
      <Product product={product1} />
      <Product product={product2} />
      <Product product={product3} />
      <Product product={product4} />
    </>
  );
}
