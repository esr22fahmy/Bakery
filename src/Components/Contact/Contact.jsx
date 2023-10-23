import React, { useState } from "react";
import styleCon from "./Contact.module.css";
import Joi from "joi";

const schema = Joi.object({
  firstname: Joi.string().min(2).max(30).required(),
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } })
    .required(),
  tel: Joi.string().pattern(new RegExp("^[0-9]{10}$")).required(),
});

export default function Contact() {
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const validation = {
      firstname: String(data.get("firstname")),
      email: String(data.get("email")),
      tel: String(data.get("tel")),
    };

    const { error } = schema.validate(validation, { abortEarly: false });

    if (error) {
      const newErrors = {};
      error.details.forEach((err) => {
        newErrors[err.context.key] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    // ----- fetch -----------
    fetch("http://upskilling-egypt.com:3000/contact", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <section className=" py-5">
        <h6 className={`${styleCon.wordCon} p-sections`}>Contact us</h6>

        <div className=" container">
          <div className=" row justify-content-center">
            <div className=" col-md-4 ">
              <form onSubmit={handleSubmit}>
                <input
                  className={`${styleCon.inp}`}
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Full Name"
                />

                {errors.firstname && (
                  <p style={{ color: "red" }}>{errors.firstname}</p>
                )}
                <p className=" my-3"></p>

                <input
                  className={`${styleCon.inp} `}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

                <p className=" my-3"></p>
                <input
                  className={`${styleCon.inp}`}
                  type="tel"
                  id="pname"
                  name="tel"
                  placeholder="Phone"
                />
                {errors.tel && <p style={{ color: "red" }}>{errors.tel}</p>}

                <button
                  className={`${styleCon.btnSend}  d-block mt-3`}
                  type="submit"
                >
                  SEND
                </button>
              </form>
            </div>

            <div className=" col-md-4 d-flex justify-content-center align-items-center">
              <div>
                <div className={`${styleCon.colorTextIcons}`}>
                  <span>
                    <i className="fa-solid fa-envelope me-3"></i>
                  </span>
                  <span className=" text-dark">upskilling.eg1@gmail.com</span>
                </div>

                <div className="my-4"></div>

                <div className={`${styleCon.colorTextIcons}`}>
                  <span>
                    <i className="fa-solid fa-phone me-3"></i>
                  </span>
                  <span className=" text-dark">+20 115 493 2137</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
