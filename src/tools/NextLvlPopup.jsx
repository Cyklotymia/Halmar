import React ,{useState}from "react";
import categoryPopupData from "../assets/data/categoryPopupData.js";
import roomsPopupData from "../assets/data/roomsPopupData.js";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeCategories,activeRooms, activeHamburger } from "../redux/activeHamburger";

function NextLvlPopup({name}) {
  const dispatch = useDispatch();
  const {isActiveHamburger,isActiveCategories,isActiveRooms} = useSelector((state) => state.activeHamburger);
 
  let listToGenerate
  let nameOfPopup=name
  let categoryList
  if (name==="Kategorie") {
 
    listToGenerate=[...categoryPopupData]
    
  }else if (name==="Pomieszczenia") {
   
   
    listToGenerate=[...roomsPopupData]
   
  }
  
    if (listToGenerate) {
      
       categoryList = listToGenerate.map((hambElement) => {
       
        return(
        <li key={hambElement.name} className="hamburgerPopup__element">
          <Link
            onClick={() => {
             dispatch(activeHamburger(false))
             console.log('object');
            }}
            className="hamburgerPopup__link"
            to={hambElement.link ?? "#"}
          >
           
            <span className="hambPopup__text">{hambElement.name}</span>
            
          </Link>
        </li>)
      })
    }
  return (
    <div 
    className={`hamburgerPopup__lvl1--${name} ${name==="Kategorie"&& isActiveCategories? "active-k":null} ${name==="Pomieszczenia"&& isActiveRooms? "active-p":null}`}>
      <div className="hamburgerPopup__nav">
        <span onClick={()=>{
          
           dispatch(activeCategories(false))
           dispatch(activeRooms(false))
           
        }} className="hamburgerPopup__back">Powrót</span>
        <span className="hamburgerPopup__cat">{nameOfPopup}</span>
      </div>
      <ul className="hamburgerPopup__list">{listToGenerate&&categoryList}</ul>
    </div>
  );
}

export default NextLvlPopup;
