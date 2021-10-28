import React from "react";
import { Link } from "react-router-dom";
function BlogsNavElement({ name }) {
  const navName = name ?? "...";
  return (
    <>
      {name && <span className="blogs__nav-element">{navName}</span>}
      {!name && <Link className="blogs__nav-element" to="/blogi">{navName}</Link>}
    </>
  );
}

export default BlogsNavElement;
