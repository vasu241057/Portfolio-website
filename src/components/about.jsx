import React from "react";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div
      style={{ background: "#0b0b0d", color: "white" }}
      className="main-div"
      id="about"
    >
      <Fade left cascade>
        <section className="div-1 about">
          <h1 className="heading">About Me</h1>
          <div>
            <p className="text mt-4 mb-3">
              Hello! I'm Vasu, a software development enthusiast, competitive
              coder, and writer in India.
            </p>
            <p className="text my-3">
              I'm a final year undergraduate pursuing{" "}
              <span style={{ color: "#63c9c6" }}>B.E.(Hons.) Civil</span> from{" "}
              <span style={{ color: "#63c9c6" }}>BITS PILANI</span>. I enjoy
              designing and creating beautiful web application / website and
              anything in between. I seek and enjoy stuff that challenges me and
              makes me think out of the box. My main goal is to be able to build
              useful, sleek, and efficient products.
            </p>
          </div>
          <p className="text mt-3">
            Here are a few technologies that I currently work with:
          </p>
          <div className="skills-box">
            <ul className="lists">
              {["React/Redux", "Node", "Express"].map((text) => {
                return (
                  <li className="my-2 list-item" key={text}>
                    {text}
                  </li>
                );
              })}
            </ul>
            <ul className="lists">
              {["SCSS", "Material UI", "C++/DSA"].map((text) => {
                return (
                  <li className="my-2 list-item" key={text}>
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default About;
