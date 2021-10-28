import React from "react";
import BlogsElements from "./BlogsElements";
import BlogsNavElement from "./BlogsNavElement";

function Blogs() {
  return (
    <section className="blogs">
      <div className="wrapper">
        <div className="blogs__nav">
          <span className=" halmar__header blogs__nav-header">
            ostatnio na{" "}
            <span className="halmar__header--bold blogs__nav-header--bold">
              blogu
            </span>
          </span>
          <div className="blogs__nav-container">

          <BlogsNavElement key={"wszystkie"} name={"wszystkie"} />
          <BlogsNavElement key={"aktualności"} name={"aktualności"} />
          <BlogsNavElement key={"nowości"} name={"nowości"} />
          <BlogsNavElement key={"porady"} name={"porady"} />
          <BlogsNavElement key={0} name={null} />
          </div>
        </div>
        <BlogsElements />
      </div>
    </section>
  );
}

export default Blogs;
