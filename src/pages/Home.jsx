import React from "react";
import Layout from "../Layout";
import hero from "../img/hero-image.png";
import about from "../img/about-image.png";
import g1 from "../img/g1.jpeg";
import g2 from "../img/g2.jpeg";
import g3 from "../img/g3.jpg";
import g4 from "../img/g4.jpeg";
import g5 from "../img/g5.jpeg";
import g6 from "../img/g6.jpeg";
import g7 from "../img/g7.jpeg";
import g8 from "../img/g8.jpg";
import g9 from "../img/g9.jpg";
import check from "../img/check.png";
import user from "../img/user.png";
import money from "../img/money.png";

export default function Home() {
  return (
    <Layout>
      <section id="home">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-sm-6">
              <h1 class="fw-bolder text-primary h1-text">
                <span className="special">special offer</span>
                <br />
                sale up to <br />
                50% off
              </h1>
              <p class="mt-3 line-height">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                hic minus quam recusandae! Suscipit nam dolorem optio laudantium
                consectetur cumque ut neque est rerum debitis, atque molestiae
                ea quia nemo!
              </p>
              <div class="mt-3">
                <button class="btn btn-primary rounded-3">Buy Now</button>
              </div>
            </div>

            <div class="col-sm-6 d-none d-sm-flex">
              <div class="ps-sm-5">
                <img src={hero} alt="" width="400" class="rounded-3 image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="mt-4">
        <div class="row justify-content-center my-5">
          <div class="w-auto">
            <div class="border-bottom border-2 border-primary text-center">
              <h2 class="fw-bolder h2">
                About <span class="text-primary">Us</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row align-items-sm-center flex-sm-row my-5">
            <div class="col-sm-3 my-sm-2">
              <div class="pe-sm-5 image">
                <img src={about} alt="" class="rounded-3" />
              </div>
            </div>

            <div class="col-sm-9 my-sm-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                nulla culpa deleniti hic quaerat. Illum animi, atque, totam eos
                possimus cupiditate quasi ipsa et minima aliquam ullam corporis
                voluptate! Blanditiis assumenda aliquam nostrum nesciunt
                quisquam sunt, accusamus a at harum consectetur cum minima, eius
                dicta atque iusto delectus odit ad. Learn More
              </p>
              <button class="btn btn-primary rounded-3">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" class="mt-4 gallery-section container">
        <div class="row justify-content-center my-5">
          <div class="w-auto">
            <div class="border-bottom border-2 border-primary text-center">
              <h2 class="fw-bolder h2">
                Our <span class="text-primary">Gallery</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="image-container">
          <img src={g6} alt="" />
          <img src={g2} alt="" />
          <img src={g3} alt="" />
          <img src={g4} alt="" />
          <img src={g5} alt="" />
          <img src={g9} alt="" />
          <img src={g7} alt="" />
          <img src={g8} alt="" />
          <img src={g1} alt="" />
        </div>
      </section>

      <section id="menu" class="stat-section">
        <div class="row justify-content-center my-5">
          <div class="w-auto">
            <div class="border-bottom border-2 border-primary text-center">
              <h2 class="fw-bolder h2">
                Our <span class="text-primary">Stats</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-3">
              <div class="rounded-4 bg-primary d-flex justify-content-center align-items-center p-4 shadow height-card">
                <img src={check} alt="menu" width="40" />
              </div>
              <h5 class="text-center fw-bolder mt-2">Easy Order System</h5>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                harum.
              </p>
            </div>

            <div class="col-md-3">
              <div class="rounded-4 bg-primary d-flex justify-content-center align-items-center p-4 shadow height-card">
                <img src={user} alt="menu" width="40" />
              </div>
              <h5 class="text-center fw-bolder mt-2">On Time Delievery</h5>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                harum.
              </p>
            </div>

            <div class="col-md-3">
              <div class="rounded-4 bg-primary d-flex justify-content-center align-items-center p-4 shadow height-card">
                <img src={money} alt="menu" width="40" />
              </div>
              <h5 class="text-center fw-bolder mt-2">Money Back Gaurantee</h5>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                harum.
              </p>
            </div>

            <div class="col-md-3">
              <div class="rounded-4 bg-primary d-flex justify-content-center align-items-center p-4 shadow height-card">
                <img src={user} alt="menu" width="40" />
              </div>
              <h5 class="text-center fw-bolder mt-2">24/7 Customer Support</h5>
              <p class="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                harum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="contact-section container">
        <div class="row justify-content-center my-5">
          <div class="w-auto">
            <div class="border-bottom border-2 border-primary text-center">
              <h2 class="fw-bolder h2">
                Contact <span class="text-primary">Us</span>
              </h2>
            </div>
          </div>
        </div>

        <div class="container mb-5">
          <div class="row">
            <div class="col-md-12 bg-primary panel-form shadow rounded-3">
              <form action="" class="p-3">
                <div class="form-group">
                  <div class="row">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control mt-2 input-height"
                        name="first-name"
                        placeholder="First Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control mt-2 input-height"
                        name="last-name"
                        placeholder="Last Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control mt-2 input-height"
                        name="email"
                        placeholder="Email"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control mt-2 input-height"
                        name="number"
                        placeholder="Number"
                      />
                    </div>
                    <div class="col-md-12 mt-2">
                      <textarea
                        class="form-control text-area-height"
                        id="message"
                        rows="3"
                        placeholder="Message..."
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button class="btn btn-warning mt-2">SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
