import React from "react";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>our locations</h3>
          <a href="#">
            {" "}
            <i className="fas fa-map-marker-alt"></i> india{" "}
          </a>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="./index.html">
            {" "}
            <i className="fas fa-arrow-right"></i> home{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> featured{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> Category{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> reviews{" "}
          </a>
          <a href="./feedback.html">
            {" "}
            <i className="fas fa-arrow-right"></i> feedback{" "}
          </a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> account info{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> ordered items{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> privacy policy{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> payment method{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-arrow-right"></i> our serivces{" "}
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> xxxxxxxxxx{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-phone"></i> xxxxxxxxxx{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> shail.s.pancholi@gmail.com{" "}
          </a>
          <a href="#">
            {" "}
            <i className="fas fa-envelope"></i> oswaldiya6@gmail.com{" "}
          </a>
          <img
            src="https://raw.githubusercontent.com/KordePriyanka/Books4MU-Book-Store-Website-/main/image/worldmap.png"
            className="map"
            alt=""
          />
        </div>
      </div>

      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>
    </section>
  );
}
