import { Images } from "../../images/Images";
import "./Footer.css";

import React from "react";

const Footer = ({className}) => {
  return (
    <div className={`amazon-footer ${className}`}>
      <div className="footer-back-to-top">
        <a href="/top">Back to top</a>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">About Amazon</a>
            </li>
            <li>
              <a href="/">Investor Relations</a>
            </li>
            <li>
              <a href="/">Amazon Devices</a>
            </li>
            <li>
              <a href="/">Amazon Science</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <a href="/">Sell on Amazon</a>
            </li>
            <li>
              <a href="/">Sell on Amazon Business</a>
            </li>
            <li>
              <a href="/">Sell Your Apps on Amazon</a>
            </li>
            <li>
              <a href="/">Become an Affiliate</a>
            </li>
            <li>
              <a href="/">Advertise Your Products</a>
            </li>
            <li>
              <a href="/">Self-Publish with Us</a>
            </li>
            <li>
              <a href="/">Host an Amazon Hub</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li>
              <a href="/">Amazon Business Card</a>
            </li>
            <li>
              <a href="/">Shop with Points</a>
            </li>
            <li>
              <a href="/">Reload Your Balance</a>
            </li>
            <li>
              <a href="/">Amazon Currency Converter</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li>
              <a href="/">Amazon and COVID-19</a>
            </li>
            <li>
              <a href="/">Your Account</a>
            </li>
            <li>
              <a href="/">Your Orders</a>
            </li>
            <li>
              <a href="/">Shipping Rates & Policies</a>
            </li>
            <li>
              <a href="/">Returns & Replacements</a>
            </li>
            <li>
              <a href="/">Manage Your Content and Devices</a>
            </li>
            <li>
              <a href="/">Amazon Assistant</a>
            </li>
            <li>
              <a href="/">Help</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="logo-container mx-5">
          <img className="w-100" src={Images.logo2} alt="" />
        </div>
        <button className="mx-2 d-flex align-items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-globe"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
          </svg>
          <p className="m-0 ps-1">English</p>
        </button>
        <button className="fault-btn">
          <img src={Images.flag} alt="" /> India
        </button>
      </div>
      <div className="dark-bg">
        <div className="text-container mx-auto w-75 d-flex align-items-center justify-content-between p-4">
          <div className="colum">
            <p>AbeBooks</p>
            <p className="text-col">
              Books, art
              <br />& collectibles
            </p>
            <p className="mt-2">Shopbop
</p>
            <p className="text-col ">Designer <br />
            Fashion Brands</p>
          </div>
          <div className="colum">
          <p>Amazon Web Services</p>
            <p className="text-col">
            Scalable Cloud <br />
            Computing Services
            </p>
            <p className="mt-2">Amazon Business
</p>
            <p className="text-col ">Everything For <br />
            Your Business</p>
          </div>
          <div className="colum">
          <p>Audible</p>
            <p className="text-col">
            Download <br />
Audio Books
            </p>
            <p className="mt-2">Prime Now
</p>
            <p className="text-col ">2-Hour Delivery <br />
            on Everyday Items</p>
          </div>
          <div className="colum">
          <p>IMDb</p>
            <p className="text-col">
            Movies, TV <br />
            & Celebrities
            </p>
            <p className="mt-2">Amazon Prime Music
</p>
            <p className="text-col ">100 million songs, ad-free <br />
            Over 15 million podcast episodes</p>
          </div>
        

        </div>
        <p className="text-center mt-3">Conditions of Use & Sale <span className="mx-2">
Privacy Notice</span>
<span className="mx-2"> Interest-Based Ads</span> <br />
© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
      
    </div>
  );
};

export default Footer;
