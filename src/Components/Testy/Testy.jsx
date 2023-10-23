import React from "react";
import styleTes from "./Testy.module.css";

export default function Testy() {
  return (
    <section className={`${styleTes.layerBac} `}>
      <div className={`${styleTes.ImgeDessert} p-sections`}>
        <h5 className={`${styleTes.wordTesty} py-5`}>testymonials</h5>

        <div className=" container">
          <div className=" row">
            <div className=" col-md-6">
              <div className={`${styleTes.card} card`}>
                <div className="card-body">
                  <h5 className={`${styleTes.cardTitle} card-title`}>
                    Kathryn Murphy
                  </h5>
                  <p className="card-text text-dark">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                  <div>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star  "></span>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* ===== */}
            <div className=" col-md-6 ">
              <div className={`${styleTes.card} card`}>
                <div className="card-body">
                  <h5 className={`${styleTes.cardTitle} card-title`}>
                    Kathryn Murphy
                  </h5>
                  <p className="card-text text-dark">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                  <div>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star  "></span>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* ==========sec2======== */}

            <div className=" col-md-6 mt-4">
              <div className={`${styleTes.card} card`}>
                <div className="card-body">
                  <h5 className={`${styleTes.cardTitle} card-title`}>
                    Kathryn Murphy
                  </h5>
                  <p className="card-text text-dark">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                  <div>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star  "></span>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* 2 */}

            <div className=" col-md-6 mt-4">
              <div className={`${styleTes.card} card`}>
                <div className="card-body">
                  <h5 className={`${styleTes.cardTitle} card-title`}>
                    Kathryn Murphy
                  </h5>
                  <p className="card-text text-dark">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                  <div>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star  "></span>
                    <span className="fa fa-star "></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="  text-center">
            <button className={`${styleTes.BtnCon} `}>Contact us</button>
          </div>
        </div>
      </div>
    </section>
  );
}
