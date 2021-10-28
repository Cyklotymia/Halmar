import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeBlogs, resetBlogs } from "../redux/blogsRedux";
function BlogsNavElement({ name }) {
  const navName = name ?? "...";
  const dispatch = useDispatch();

  const { choosedBlogs } = useSelector((state) => state.blogsRedux);
 
  const navBlogsHandler = () => {
    dispatch(changeBlogs(name));
  };

  return (
    <>
      {name && (
        <span
          className={`blogs__nav-element ${
            name === choosedBlogs ? "active" : "unActive"
          }`}
          onClick={()=>{
            navBlogsHandler()
            dispatch(resetBlogs())
          }}
        >
          {navName}
        </span>
      )}
      {!name && (
        <Link className="blogs__nav-element" to="/blogi">
          {navName}
        </Link>
      )}
    </>
  );
}

export default BlogsNavElement;
