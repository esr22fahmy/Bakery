import React from "react";
import styleHome from "./Home.module.css";
import logImg from "../../Img/Place Your Logo Here (Double Click to Edit) 1.png";
import imgBread from "../../Img/bakery-2.png";
// import imgStar from "../../Img/Star 1.png";
export default function Home() {
  return (
    <>
      <section className={`${styleHome.ImgeDessert}`}>
        <div className={`${styleHome.layerBac}`}>
          <nav className="navbar navbar-expand-lg  bg-transparent p-sections">
            <div className={` container`}>
              <a
                className={`${styleHome.logoCon} navbar-brand row  align-items-center justify-content-center`}
                href="#"
              >
                <img className={`${styleHome.logImg} co-6 col-md-4`} src={logImg} />
                <h1 className={`${styleHome.textLogo} col-6  col-md-4 text-white`}>
                  Peachy Pup
                  <h1 className=" col-md-4">Bakery</h1>
                </h1>
              </a>
            </div>
          </nav>
          {/*  conText Center*/}
          <div className={`${styleHome.conTextHome} text-white  mt-5 `}>
            <div className={`${styleHome.conText} container`}>
              <div className={`${styleHome.testySection } h-100 row align-items-center justify-content-center `}>
                      <div className=" col-12 col-sm-12 col-md-12 col-lg-9">
                      <h1 className={`${styleHome.tasty} text-uppercase`}>
                  Tasty pastries
                </h1>
                <p>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the{" "}
                </p>

                <button className={`${styleHome.btnSee} .btnSee text-white`}>
                  {" "}
                  see more{" "}
                </button>





                      </div>

                      <div
                      className={`${styleHome.conImg} col-12 col-sm-12 col-md-12 mt-5 col-lg-3 `}
                    >
                      <img className={`${styleHome.imgBread} `} src={imgBread} />
                    </div>
              </div>
           
            </div>
          </div>
          {/* box img */}
        </div>
        <div className={`${styleHome.box}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              height: "100%",
              paddingRight: "2rem",
              alignItems: "center",
              color: "#C98A40",
            }}
          >
            <div>
              <i className="fab fa-vk d-block"></i>
              <i className="fab fa-facebook-square  d-block"></i>
              <i className="fab fa-instagram-square  d-block"></i>
              <i className="fab fa-twitter-square  d-block"></i>

              <div className={`${styleHome.Telephone} ms-5 `}>
                <p className="ms-5 "> Telephone: +7 700 000 00 00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
