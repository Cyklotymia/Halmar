import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeRooms } from "../redux/activeNav";
import RoomsPopup from "./RoomsPopup";

function MenuList() {
  const { isActiveRooms } = useSelector((state) => state.activeNav);
  const dispatch = useDispatch();
  return (
    <ul className="menu__list">
      {isActiveRooms&&<RoomsPopup/>}
      <li
        className={`menu__list-element menu__popup
            ${isActiveRooms ? "active" : "unActive"}`}
        onClick={() => {
          dispatch(activeRooms());
        }}
      >
        <span className="menu__list-title bold">POMIESZCZENIA</span>
        <i className="halmar-icon_30 menu__icon"></i>
      </li>
      <li className="menu__list-element">
        <Link className="menu__list-title" to="/new">
          NOWOŚCI
        </Link>
      </li>
      <li className="menu__list-element">
        <Link className="menu__list-title" to="/discount">
          PROMOCJE
        </Link>
      </li>
      <li className="menu__list-element">
        <Link className="menu__list-title" to="/about">
          O NAS
        </Link>
      </li>
      <li className="menu__list-element">
        <Link className="menu__list-title" to="/inspirations">
          INSPIRACJE
        </Link>
      </li>
      <li className="menu__list-element">
        <Link className="menu__list-title" to="/blog">
          {" "}
          BLOG
        </Link>
      </li>
      <li className="menu__list-element">
        <Link className="menu__list-title" to="/contact">
          KONTAKT
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;
