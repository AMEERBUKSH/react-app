import React from "react";
import MyNav from "./MyNav";
import { Link } from "react-router-dom";
import "../css/Home.css";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <>
      <MyNav />
      <div className="container-fluid d-flex flex-column justify-content-center mt-0 px-2 py-5 my-3 text-center hero-wrapper">
        {/* <h1 className="display-3 fw-bold">InTech Solusions</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4 fs-6">
            InTech Solusions provides you a complete range of database
            management software with its unmatched combination of flexibility,
            usability, and productivity.
          </p>
        </div> */}

  
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1683009427590-dd987135e66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  


      </div>
      <br />
      <br />

      <h3
        data-aos="fade-right"
        data-aos-duration="1000"
        class="text-center mb-5"
      >
        CARDS
      </h3>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        class="container-fluid px-5"
      >
        <div class="row row-cols-1 row-colsm-2 row-cols-md-2 row-cols-lg-4 g-4 d-flex justify-content-center">
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/trademanagementerp.html"
                >
                  <i class="fa-solid fa-trademark w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    CARD
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/schoolmanagementerp.html"
                >
                  <i class="fa-solid fa-school w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    CARD
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/petrolpumpmanagement.html"
                >
                  <i class="fa-solid fa-gas-pump w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    CARD
                  </h5>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body text-center">
                <a
                  class="text-decoration-none"
                  href="./products/constructionmanagement.html"
                >
                  <i class="fa-solid fa-building w-100 fs-3 text-primary mb-2"></i>
                  <h5 class="card-title text-secondary">
                    CARD
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="container my-3 text-center">
          {/* <Link to="/Products">All Products</Link> */}
        </div>
      </div>
      
    </>
  );
}

export default Home;
// export default IndividualIntervalsExample;

