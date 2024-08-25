import React from "react";
import "./Header.css";
import { Images } from "../../images/Images";

const Header = () => {
  return (
    <div className="main-header">
      <div className="primary-header">
        <div className="logo-container">
          <img className="logo-image" src={Images.logo} alt="" />
        </div>
        <div className="location">
          <p className="m-0">Deliver to htg</p>
          <div className="loc-icon">
            <span className="material-symbols-outlined">location_on</span>
            <h6 className="m-0">Nellore 524004</h6>
          </div>
        </div>
        <div className="search-bar">
          <div className="dropdown">
            <select name="category" id="category">
              <option value="all">All</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home">Home & Kitchen</option>
              <option value="toys">Toys & Games</option>
              <option value="beauty">Beauty & Personal Care</option>
              <option value="sports">Sports & Outdoors</option>
              <option value="automotive">Automotive</option>
              <option value="grocery">Grocery & Gourmet Food</option>
              <option value="health">Health & Household</option>
              <option value="industrial">Industrial & Scientific</option>
              <option value="pet">Pet Supplies</option>
              <option value="baby">Baby</option>
              <option value="software">Software</option>
              <option value="tools">Tools & Home Improvement</option>
            </select>
          </div>
          <input type="text" placeholder="Search Amazon.in" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="drop-downmenu">
          <div className="dropdown">
            <button
              className="btn bg-transparent text-white dropdown-toggle"
              type="button"
            >
              <img src={Images.india} alt="none" /> EN
            </button>
          </div>
        </div>
        <a href="/youraccount">
          <div className="account">
            <p>Hello, htg</p>
            <h6>Account & Lists</h6>
          </div>
        </a>
        <div className="account">
          <p>Returns</p>
          <h6>& Orders</h6>
        </div>
        <div className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="ms-1 mb-0 text-white">Cart</p>
        </div>
      </div>
      <div className="second-header align-items-center">
        <div className="main-modal">
          <button
            className="btn bg-transparent text-white d-flex align-items-center"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-bars pe-1 m-0"></i><p className="m-0">All</p> 
          </button>
          <div className="offcanvas offcanvas-start" id="staticBackdrop">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="user-info d-flex align-items-center">
                <h6 className="mb-0 me-2">Hello ,Htg</h6>
                <i class="fa-solid fa-user "></i>
              </div>
              <hr />
              <div className="menu-section">
                <h6>Your Lists</h6>
                <ul>
                  <li>Create a List</li>
                  <li>Find a List or Registry</li>
                  <li>AmazonSmile Charity Lists</li>
                </ul>
              </div>
              <hr />
              <div className="menu-section">
                <h6>Your Account</h6>
                <ul>
                  <li>Your Account</li>
                  <li>Your Orders</li>
                  <li>Your Wish List</li>
                  <li>Your Recommendations</li>
                  <li>Your Prime Membership</li>
                  <li>Your Prime Video</li>
                  <li>Your Subscribe & Save Items</li>
                  <li>Your Amazon Business Account</li>
                  <li>Your Seller Account</li>
                  <li>Manage Your Content and Devices</li>
                  <li>Memberships & Subscriptions</li>
                </ul>
              </div>
              <hr />
              <div className="menu-section">
                <h6>Shop by Category</h6>
                <ul>
                  <li>All</li>
                  <li>Books</li>
                  <li>Electronics</li>
                  <li>Fashion</li>
                  <li>Home & Kitchen</li>
                  <li>Toys & Games</li>
                  <li>Beauty & Personal Care</li>
                  <li>Sports & Outdoors</li>
                  <li>Automotive</li>
                  <li>Grocery & Gourmet Food</li>
                  <li>Health & Household</li>
                  <li>Industrial & Scientific</li>
                  <li>Pet Supplies</li>
                  <li>Baby</li>
                  <li>Software</li>
                  <li>Tools & Home Improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-bar">
          <h6>Fresh</h6>
          <h6>Buy again</h6>
          <h6>Amazon mini tv</h6>
          <h6>Sell</h6>
          <h6>Customer Service</h6>
          <h6 className="pucuk">New Releases</h6>
          <h6 className="pucuk">Grocery & Gourmet Foods</h6>
          <h6 className="pucuk">Electronics</h6>
          <h6 className="pucuk">Health, House & Personal Care</h6>
          <h6 className="pucuk">Subscribe & Save</h6>
        </div>
        <div className="logo-nav">
          <img src={Images.logonav} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
