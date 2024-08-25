import { Images } from "../../images/Images";
import Header from "../Header/Header";
import "./Product.css";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import Footer from "../Footer/Footer";

const Product = () => {
  return (
    <div>
      <Header />
      <div className="underlineflex d-flex">
        <p>Beauty</p>
        <p>Luxury Beauty</p>
        <p>Best Sellers</p>
        <p>Makeup & Nails</p>
        <p>Skin care</p>
        <p>Hair care & styling</p>
        <p>Fragrance </p>
        <p>Mens & Grooming</p>
      </div>
      <div className="underline"></div>
      <div className="section mx-auto  d-flex ">
        <div className="section1 w-50  d-flex p-2">
          <div className="rollimg-container">
            <img src={Images.product} alt="" />
          </div>
          <div className="main-img">
            <img className="w-100" src={Images.productrw} alt="" />
          </div>
        </div>
        <div className="section2 p-4">
          <h4>
            Engage Femme Eau De Parfum for Women, Citrus and Floral Fragrance
            Scent, Skin Friendly Perfume for Women, 100ml
          </h4>
          <a href="/">Visit the Engage Store</a>
          <div className="rating-container d-flex align-items-center">
            <p className="m-0 pe-2">4.0</p>
            <StarIcon className="text-warning" />
            <StarIcon className="text-warning" />
            <StarIcon className="text-warning" />
            <StarIcon className="text-warning" />
            <StarOutlineIcon className="text-warning me-2" />
            <a href="/"> 3,735 ratings | Search this page</a>
          </div>
          <p>1K+ bought in past month</p>
          <div className="underline"></div>

          <p className="d-flex align-items-center ">
            <span className="text-danger fs-5">-49%</span>{" "}
            <h4 className="m-0 mx-2">₹329</h4>(₹3.66 / millilitre)
          </p>
          <p>
            M.R.P: <s>₹649</s>
          </p>
          <p>Inclusive of all taxes</p>
          <p>
            <strong>EMI</strong> starts at ₹ 114 per month.{" "}
            <a href="/">EMI options</a>
          </p>
          <div className="checkbox-container d-flex align-items-center">
            <input type="checkbox" />
            <p className="m-0 ps-1 ">
              to save 5% on this item with coupon <a href="/">Terms</a>
            </p>
          </div>
          <div className="underline my-2"></div>
          <div className="offers-sec">
            <div className="offer-imgcont d-flex align-items-center">
              <img src={Images.offers} alt="" />
              <strong className="ms-3">Offers</strong>
            </div>
          </div>
          <div className="offer-box d-flex align-items-center">
            <div className="offerbox1 border rounded mx-1 mt-3  d-flex flex-column justify-content-between ">
              <strong>Partner Offers</strong>
              <p>
                Buy 3 get 3%, Buy 4 Get 4%, Buy 5 Get 5%. Offered by RK World
                Infocom Pvt Ltd View productsBuy 3 get 3%, Buy 4 Get 4%, Buy 5
                Get 5%. Offered by RK…
              </p>
              <a href="/">2 offers</a>
            </div>
            <div className="offerbox2 border rounded mx-1 mt-3 d-flex flex-column justify-content-between">
              <strong>Cashback</strong>
              <p>
                ₹2,000 welcome rewards with Amazon Pay ICICI Credit Card . 5%
                cashback every time on shopping.…
              </p>
              <a href="/">2 offers</a>
            </div>
            <div className="offerbox3 border rounded mx-1 mt-3">
              <strong>Bank Offer</strong>
              <p>Upto ₹500.00 discount on SBI Credit Cards</p>
              <a href="/">5 offers</a>
            </div>
          </div>
          <div className="underline mt-4"></div>
          <div className="del-related d-flex">
            <div className="del-related1">
              <img src={Images.del} alt="" />
              <p>Amazon Delivered</p>
            </div>
            <div className="del-related1">
              <img src={Images.pod} alt="" />
              <p>Pay on delivery</p>
            </div>
            <div className="del-related1">
              <img src={Images.nonret} alt="" />
              <p>Non-Retunable</p>
            </div>
            <div className="del-related1">
              <img src={Images.tb} alt="" />
              <p>Top Brand</p>
            </div>
            <div className="del-related1">
              <img src={Images.pod} alt="" />
              <p>Free Delivery</p>
            </div>
          </div>
          <div className="underline my-1 "></div>
          <h6>About this item</h6>
          <ul>
            <li>Quantity:Spray</li>
            <li>Top note - fruity, middle note - floral, base note - woody</li>
            <li>Fragrance concentration 10 percent</li>
            <li>
              Usage: Give it a good hard shake first to make sure all the
              ingredients are mixed together before you spray it. You should
              hold the can approximately 15cm from your body or clothes as you
              spray it. Apply on pulse points for an intense long lasting trail
            </li>
            <li>
              Ingredients: Top Note Fruity, Middle Note Floral, Base Note Woody
            </li>
          </ul>
        </div>
        <div className="section3  p-2">
          <div className="main-parties  border rounded p-2">
            <strong>One-time purchase:</strong>
            <p>
              <h5>₹329.00</h5>(₹3.66 / millilitre)
            </p>
            <p>
              <a href="/">FREE delivery</a> Friday, 16 August
            </p>
            <p>on orders dispatched by</p>
            <p>
              Amazon over ₹499. <a href="/">Details</a>
            </p>
            <p>
              Or fastest delivery <strong>Tomorrow</strong>,{" "}
              <strong>12 August</strong>. Order within 4 hrs 39 mins.{" "}
              <a href="/">Details</a>{" "}
            </p>
            <div className="location-container d-flex">
            <span className="material-symbols-outlined pe-2">location_on</span>
            <p>Deliver to HTG - Nellore 524002‌</p>
            </div>
            <h6  className="text-success">In stock
            </h6>
            <p>Ships from
            <strong className="ms-2">Amazon</strong></p>
            <p>Sold by<strong> RK World Infocom Pvt Ltd</strong>
            </p>
            <p>Quantity:
<select name="" id="" className="ms-2">
  <option value="">1</option>
  <option value="">2</option>
  <option value="">3</option>
</select>
</p>
<button className="btn btn-warning rounded-pill w-100">Add to Cart</button>
<button className="btn-leg rounded-pill w-100">Buy Now</button>
          </div>
       
      
        </div>
      </div>
      <div className="productinfo w-75 mx-auto">
        <img src={Images.productinfo} alt="" />
      </div>
      <div className="productinfo w-75 mx-auto mb-5">
        <img src={Images.productdet} alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Product;
