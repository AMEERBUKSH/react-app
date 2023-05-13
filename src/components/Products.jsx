import React from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import "../css/Products.css";

let Products = () => {
  return (
    <>
      <MyNav />
      <div
        className="container-fluid about-heading bg-light shadow"
        style={{ height: 300, display: "flex", alignItems: "center" }}
      >
        <div className="container">
          <h1> PRODUCTS IN FUTURE</h1>
          <p>EVERYTHING ON ONE TAP 👍</p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container-fluid px-5"
      >
        <div className="row row-col-2 row-colsm-2 row-cols-md-3 row-cols-lg-4 g-3 d-flex justify-content-center my-5">
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  <i className="fa-solid fa-trademark w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary ">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/schoolmanagementerp.html"
                >
                  <i className="fa-solid fa-school w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="./products/petrolpumpmanagement.html"
                >
                  <i className="fa-solid fa-gas-pump w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  <i className="fa-solid fa-building w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  <i className="fa-solid fa-hospital w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  <i className="fa-solid fa-burger w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  <i className="fa-solid fa-calendar-check w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <div className="card-body text-center">
                <a
                  className="text-decoration-none"
                  href="#"
                >
                  <i className="fa-solid fa-oil-can w-100 fs-3 text-warning mb-2"></i>
                  <h5 className="card-title text-secondary">
                    COMING SOON
                  </h5>
                </a>
              </div>
            </div>
          </div>
          
          
          
          
         
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
