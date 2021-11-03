import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector,useDispatch} from "react-redux";
import exampleImg from "../assets/images/blog_01.jpg";

import { arrowHandler } from "../redux/blogsRedux";
function BlogsElements() {
  const { blogs, choosedBlogs, length,maxIndexOfProducts,numberOfVisibleElements } = useSelector(
    (state) => state.blogsRedux
  );
  const { isUserLogged } = useSelector((state) => state.account);
const dispatch = useDispatch()

const blogsElement=blogs.map(blogs=>{
 
  if (choosedBlogs===blogs.name) {
    const item=blogs.list.map((element,index)=>{
      if(index>maxIndexOfProducts)return;
      if (index <= maxIndexOfProducts - numberOfVisibleElements) return;
      const { id, date,topic,category} = element;
      const linkTopic=topic.replace(/\s/g, '')
      return(
        <div key ={id}className="blogs__element">
          <img src={exampleImg}className="blogs__element-img"></img>
          <div className="blogs__element-info">
            <span className="blogs__element-date">{date}</span>
            <h5 className="blogs__element-header">{topic}</h5>
            <Link className="blogs__element-link"to={`/${category??blogs.name}`}>{category??blogs.name}</Link>
            <Link className="blogs__element-button halmar__button"to={`/${linkTopic}`}>zobacz więcej</Link>
            
          </div>
        </div>
      )
    })
    return (
    item
    )
  }else{
    return
  }
})
    return (
        <div className="blogs__container">
          {blogsElement}
          {length > maxIndexOfProducts && (
        <div
          onClick={() => {
            dispatch(arrowHandler("right"));
          }}
          className="blogs__container-arrow--right blogs__container-arrow"
        >
          <i className="halmar-icon_30 blogs__arrow-icon"></i>
        </div>
      )}
      {maxIndexOfProducts > numberOfVisibleElements && (
        <div
          onClick={() => {
           dispatch(arrowHandler("left"));
          }}
          className="blogs__container-arrow--left blogs__container-arrow"
        >
          <i className="halmar-icon_30 blogs__arrow-icon"></i>
        </div>
      )}
        </div>
      );
}

export default BlogsElements;