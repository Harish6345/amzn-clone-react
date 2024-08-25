import { Images } from "../../images/Images";
import Footer from "../Footer/Footer";
import Bodyslider from "../Slider/Bodyslider";
import "./Body.css";

import React from "react";

const Body = () => {
  return (
    <div className="main-body">
      <div className="slider mx-auto">
        <div
          id="carouselExample"
          className="carousel slide d-none d-lg-block d-md-block d-sm-block"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Images.banner1} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Images.banner2} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Images.banner3} className="d-block w-100" alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </div>
      <div className="container container1 mx-auto">
        <div className="row m-0">
          <div className="col mx-2 border  bg-white p-2">
            <h5 className="mb-4">Deals based on your shopping trends</h5>
            <div className="main-box">
              <div className="box">
                <img src={Images.image1} alt="" />
                <h6>Great Freedom Sale</h6>
              </div>
              <div className="box">
                <img src={Images.image2} alt="" />
                <h6>Great Freedom Sale</h6>
              </div>
            </div>
            <div className="main-box mt-5">
              <div className="box">
                <img src={Images.image3} alt="" />
                <h6>Great Freedom Sale</h6>
              </div>
              <div className="box">
                <img src={Images.image4} alt="" />
                <h6>Great Freedom Sale</h6>
              </div>
            </div>
            <pre>see all Deals</pre>
          </div>
          <div className="col mx-2 border  bg-white p-2">
            <h5>Keep Shopping For</h5>
            <div className="main-box">
              <div className="box">
                <img src={Images.image5} alt="" />
                <p>Travel kits & organisers</p>
              </div>
              <div className="box">
                <img src={Images.image6} alt="" />
                <p>Pc Game Hedsets</p>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img className="w-75" src={Images.image7} alt="" />
                <p>Smart Phone & basics</p>
              </div>
              <div className="box">
                <img src={Images.image8} alt="" />
                <p>Men clocks & mule's</p>
              </div>
            </div>
          </div>
          <div className="col mx-2 border  p-2 bg-white">
            <h5>Up to 65% off | Televisions</h5>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image9} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $6999
                </p>
              </div>
              <div className="box">
                <img src={Images.image9} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $7999
                </p>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img src={Images.image10} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $8999
                </p>
              </div>
              <div className="box">
                <img src={Images.image11} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $19999
                </p>
              </div>
            </div>
          </div>
          <div className="col mx-2 border  bg-white p-2">
            <h5>Keep Visiting</h5>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image1} alt="" />
              </div>
              <div className="box">
                <img src={Images.image7} alt="" />
              </div>
            </div>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image9} alt="" />
              </div>
              <div className="box">
                <img src={Images.image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row hero">
          <div className="col m-2 border  bg-white p-2">
            <h5 className="">Deals based on your shopping trends</h5>
            <div className="main-box">
              <div className="box">
                <img
                  className="w-50"
                  src="https://m.media-amazon.com/images/I/41tffQSTlML._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
              <div className="box">
                <img
                  className="w-75"
                  src="https://m.media-amazon.com/images/I/31egtEP-uUL._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img
                  className="w-75"
                  src="https://m.media-amazon.com/images/I/31gkyndHMpL._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
              <div className="box">
                <img
                  className="w-75"
                  src="https://m.media-amazon.com/images/I/41KE1nWK0yL._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
            </div>
            <pre>see all Deals</pre>
          </div>
          <div className="col m-2 border m-2 bg-white p-2">
            <h5>Keep Shopping For</h5>
            <div className="main-box">
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_kitchen._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Travel kits & organisers</p>
              </div>
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_home._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Pc Game Hedsets</p>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_fur._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Smart Phone & basics</p>
              </div>
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_hi._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Men clocks & mule's</p>
              </div>
            </div>
          </div>
          <div className="col m-2 border m-2 p-2 bg-white">
            <h5>Up to 65% off | Televisions</h5>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image9} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $6999
                </p>
              </div>
              <div className="box">
                <img src={Images.image9} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $7999
                </p>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img src={Images.image10} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $8999
                </p>
              </div>
              <div className="box">
                <img src={Images.image11} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $19999
                </p>
              </div>
            </div>
          </div>
          <div className="col m-2 border m-2 bg-white p-2">
            <h5>Keep Visiting</h5>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image1} alt="" />
              </div>
              <div className="box">
                <img src={Images.image7} alt="" />
              </div>
            </div>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image9} alt="" />
              </div>
              <div className="box">
                <img src={Images.image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bodyslider className="slider-two mx-auto" />
      <div className="banz1 mx-auto mt-5 mb-2">
        <img className="w-100" src={Images.banz1} alt="" />
      </div>
      <div className="container mb-0 success mx-auto">
        <div className="row hero m-0">
          <div className="col m-2 border m-2 bg-white p-2">
            <h5 className="">Deals based on your shopping trends</h5>
            <div className="main-box">
              <div className="box">
                <img
                  className="w-50"
                  src="https://m.media-amazon.com/images/I/41tffQSTlML._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
              <div className="box">
                <img
                  className="w-75"
                  src="https://m.media-amazon.com/images/I/31egtEP-uUL._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img
                  className="w-75"
                  src="https://m.media-amazon.com/images/I/31gkyndHMpL._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
              <div className="box">
                <img
                  className="w-75"
                  src="https://m.media-amazon.com/images/I/41KE1nWK0yL._MCnd_AC_.jpg"
                  alt=""
                />
                <h6>Great Freedom Sale</h6>
              </div>
            </div>
            <pre>see all Deals</pre>
          </div>
          <div className="col m-2 border m-2 bg-white p-2">
            <h5>Keep Shopping For</h5>
            <div className="main-box">
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_kitchen._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Travel kits & organisers</p>
              </div>
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_home._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Pc Game Hedsets</p>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_fur._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Smart Phone & basics</p>
              </div>
              <div className="box">
                <img
                  src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Aug24_OHL/PC_1x_hi._SY116_CB566465041_.jpg"
                  alt=""
                />
                <p>Men clocks & mule's</p>
              </div>
            </div>
          </div>
          <div className="col m-2 border m-2 p-2 bg-white">
            <h5>Up to 65% off | Televisions</h5>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image9} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $6999
                </p>
              </div>
              <div className="box">
                <img src={Images.image9} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $7999
                </p>
              </div>
            </div>
            <div className="main-box">
              <div className="box">
                <img src={Images.image10} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $8999
                </p>
              </div>
              <div className="box">
                <img src={Images.image11} alt="" />
                <p>
                  Budget tv's |starting <br />
                  $19999
                </p>
              </div>
            </div>
          </div>
          <div className="col m-2 border m-2  bg-white p-2">
            <h5>Keep Visiting</h5>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image1} alt="" />
              </div>
              <div className="box">
                <img src={Images.image7} alt="" />
              </div>
            </div>
            <div className="main-box mt-4">
              <div className="box">
                <img src={Images.image9} alt="" />
              </div>
              <div className="box">
                <img src={Images.image4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bodyslider className="slider-one mx-auto" />
      <Footer className="foorter" />
    </div>
  );
};

export default Body;
