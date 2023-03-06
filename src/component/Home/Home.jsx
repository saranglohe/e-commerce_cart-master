import React from "react";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner mt-2">
          <div className="carousel-item active">
            <img
              src="https://www.wallpaperflare.com/static/376/261/73/h-and-m-hennes-and-mauritz-public-company-swedish-company-wallpaper.jpg"
              className="d-block w-100 h-100"
              id="img1"
              alt="Shopping_poster_4"
              height="700px"
               
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://previews.123rf.com/images/fizkes/fizkes1912/fizkes191201118/134957781-full-length-family-portrait-of-parents-and-children-in-casual-style-clothes-smiling-young-mother-and.jpg"
              className="d-block 2 w-100 "
              alt="Shopping_poster_4"
              height="700px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.themanual.com/wp-content/uploads/sites/9/2021/12/4.jpeg?resize=1200%2C630&p=1"
              className="d-block w-100"
              alt="Shopping_poster_4"
              height="700px"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.dpjewellers.com/files/mgyhqjoxjazvg4bvtuoi/Collection-Banner_amaya.jpg"
              className="d-block w-100"
              alt="Shopping_poster_4"
              height="700px"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Product />
    </div>
  );
};

export default Home;
