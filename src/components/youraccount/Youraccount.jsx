import React from "react";
import "./Youraccount.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Images } from "../../images/Images";

const Youraccount = () => {
  return (
    <div>
      <Header />
      <div className="acc-header w-50 mx-auto">
      <h4 className="m-3" >Your Account</h4></div>
      <div className="dashboard-container w-50 mx-auto">
        
        <div className="dashboard-item border ">
          <img src={Images.parcel} alt="Your Orders" />
          <div className="dashboard-text">
            <h3>Your Orders</h3>
            <p>Track, return, or buy things again</p>
          </div>
        </div>

        <div className="dashboard-item border">
          <img src={Images.lock} alt="mod"/>
          <div className="dashboard-text">
            <h3>Login & security</h3>
            <p>Edit login, name, and mobile number</p>
          </div>
        </div>

        <div className="dashboard-item border">
          <img src={Images.parcelblue} alt="Prime" />
          <div className="dashboard-text">
            <h3>Prime</h3>
            <p>View benefits and payment settings</p>
          </div>
        </div>

        <div className="dashboard-item border">
          <img src={Images.location} alt="Your Addresses" />
          <div className="dashboard-text">
            <h3>Your Addresses</h3>
            <p>Edit addresses for orders and gifts</p>
          </div>
        </div>

        <div className="dashboard-item border">
          <img src={Images.business} alt="Your Business Account" />
          <div className="dashboard-text">
            <h3>Your business account</h3>
            <p>Sign up for free to save up to 28%</p>
          </div>
        </div>

        <div className="dashboard-item border">
          <img src={Images.card} alt="sd"/>
          <div className="dashboard-text">
            <h3>Payment options</h3>
            <p>Edit or add payment methods</p>
          </div>
        </div>

        <div className="dashboard-item border">
          <img src={Images.wallet} alt="Amazon Pay Balance" />
          <div className="dashboard-text">
            <h3>Amazon Pay balance</h3>
            <p>Add money to your balance</p>
          </div>
        </div>

        <div className="dashboard-item border">
          <img src={Images.contact} alt="Contact Us" />
          <div className="dashboard-text">
            <h3>Contact Us</h3>
            <p>Get in touch with us</p>
          </div>
        </div>
      </div>
      <div className="account-dashboard-container w-50 mx-auto">
            <div className="account-dashboard-item border">
                <h3>Digital content and devices</h3>
                <ul>
                    <li>Apps and more</li>
                    <li>Content Library</li>
                    <li>Devices</li>
                    <li>Digital gifts you've received</li>
                </ul>
            </div>

            <div className="account-dashboard-item border">
                <h3>Email alerts, messages, and ads</h3>
                <ul>
                    <li>Advertising preferences</li>
                    <li>Communication preferences</li>
                    <li>SMS alert preferences</li>
                    <li>Message Centre</li>
                    <li>Alexa shopping notifications</li>
                    <li>Deals Notifications</li>
                </ul>
            </div>

            <div className="account-dashboard-item border">
                <h3>More ways to pay</h3>
                <ul>
                    <li>Default Purchase Settings</li>
                    <li>Amazon Pay</li>
                    <li>Coupons</li>
                </ul>
            </div>

            <div className="account-dashboard-item border">
                <h3>Ordering and shopping preferences</h3>
                <ul>
                    <li>Leave packaging feedback</li>
                    <li>Lists</li>
                    <li>Manage saved IDs</li>
                    <li>Profile</li>
                    <li>Language settings</li>
                    <li>Recalls and Product Safety Alerts</li>
                </ul>
            </div>

            <div className="account-dashboard-item border">
                <h3>Other accounts</h3>
                <ul>
                    <li>Account Linking</li>
                    <li>Seller account</li>
                    <li>Amazon Web Services</li>
                </ul>
            </div>

            <div className="account-dashboard-item border">
                <h3>Shopping programs and rentals</h3>
                <ul>
                    <li>Manage Your Amazon Family</li>
                    <li>Subscribe & Save</li>
                    <li>Shop the Kids' Store by age</li>
                </ul>
            </div>

            <div className="account-dashboard-item border">
                <h3>Subscriptions</h3>
                <ul>
                    <li>Email</li>
                    <li>Memberships & Subscriptions</li>
                </ul>
            </div>

            <div className="account-dashboard-item border">
                <h3>Manage your data</h3>
                <ul>
                    <li>Request your data</li>
                    <li>Manage apps and services with data access</li>
                    <li>Close Your Amazon Account</li>
                    <li>Privacy Notice</li>
                </ul>
            </div>
        </div>
      <Footer />
    </div>
  );
};

export default Youraccount;
