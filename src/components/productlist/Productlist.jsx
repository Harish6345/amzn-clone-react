import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Productlist.css";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import { Images } from "../../images/Images";

const Productlist = () => {
  const [products, setProducts] = useState([]); // Initialize products as an array

  useEffect(() => {
    fetch("https://gist.manojkoravangi.com/get-products.php")
      .then((res) => res.json())
      .then((json) => {
        console.log("Fetched data:", json); // Log the fetched data to see its structure
        if (Array.isArray(json)) {
          setProducts(json); // If it's an array, set it directly
        } else if (
          json &&
          typeof json === "object" &&
          Array.isArray(json.products)
        ) {
          setProducts(json.products); // Adjust this based on the structure of your API response
        } else {
          console.error("Unexpected data format:", json);
        }
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="main-div">
      <Header />
      <div className="main-sub w-100 d-flex p-3">
      <div className="sidebar bg-light">
            <h5>Delivery Day</h5>
            <ul className="list-unstyled">
              <li><input type="checkbox" /> Get It by Tomorrow</li>
              <li><input type="checkbox" /> Get It in 2 Days</li>
            </ul>

            <h5>Category</h5>
            <ul className="list-unstyled">
              <li><input type="checkbox" /> Smartphones & Basic Mobiles</li>
              <li><input type="checkbox" /> Smartphones</li>
            </ul>

            <h5>Customer Review</h5>
            <StarIcon className="text-warning" />
                    <StarIcon className="text-warning" />
                    <StarIcon className="text-warning" />
                    <StarIcon className="text-warning" />
         <p>upto 4  Rating</p>
            <h5>Brands</h5>
            <ul className="list-unstyled">
              <li><input type="checkbox" /> POCO</li>
              <li><input type="checkbox" /> Lava</li>
              <li><input type="checkbox" /> Redmi</li>
              <li><input type="checkbox" /> Samsung</li>
              <li><input type="checkbox" /> Itel</li>
              <li><input type="checkbox" /> Tecno</li>
              <li><input type="checkbox" /> MI</li>
            </ul>

            <h5>Price</h5>
            <div>
              <input type="number" placeholder="Min ₹" className="form-control mb-2" />
              <input type="number" placeholder="Max ₹" className="form-control" />
              <button className="btn btn-primary my-3">Go</button>
            </div>

            <h5>Deals & Discounts</h5>
            <ul className="list-unstyled">
              <li><input type="checkbox" /> All Discounts</li>
            </ul>

            <h5>Item Condition</h5>
            <ul className="list-unstyled">
              <li><input type="checkbox" /> New</li>
              <li><input type="checkbox" /> Renewed</li>
            </ul>

            <h5>Mobile Phone Installed RAM Size</h5>
            <ul className="list-unstyled">
              <li><input type="checkbox" /> 4 to 5.9 GB</li>
              <li><input type="checkbox" /> 6 to 7.9 GB</li>
              <li><input type="checkbox" /> 8 to 9.9 GB</li>
              <li><input type="checkbox" /> 10 GB & Above</li>
            </ul>

          </div>
      
      <div className=" w-75 mx-auto my-auto">
        <div className="align-items-center flex-wrap w-100 p-0 m-0 ">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
              <div
                key={index}
                className="htg border p-2 m-2  justifiy-content-between d-flex"
              >
                <div className="image-div p-2">
                  <img src={product.images} alt={product.name} />
                </div>
                <div className="msg-contain d-flex flex-column ">
                  <strong>{product.name}</strong>
                  <div className="star-rating d-flex ">
                    <StarIcon className="text-warning" />
                    <StarIcon className="text-warning" />
                    <StarIcon className="text-warning" />
                    <StarIcon className="text-warning" />
                  </div>
                  <p>5K+ bought in past month</p>
                  <p className="d-flex align-items-center">
                    <sup>₹</sup>
                    <h4> {product.price}</h4>M.R.P{" "}
                    <del>{product.cutoff_price}</del>({product.discount}%off)
                  </p>
                  <p>FREE delivery Sun, 18 Aug</p>
                  <p>Or fastest delivery Tomorrow, 15 Aug</p>
                  <p>Installation available</p>
                  <button className="btn btn-warning rounded rounded-lg w-25">
                    Add to cart
                  </button>
                  <img className="htg1 mt-2" src={Images.opt} alt="" />
                </div>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productlist;
