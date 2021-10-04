import React from "react";
import { Link } from "react-router-dom";
import rooms from "../assets/data/roomsPopupData";

function RoomsPopup() {
  const roomsList = rooms.map((room) => {
    return (
      <Link key={room.name} to={room.link} className="roomsPopup__element">
          <span className="roomsPopup__text">
        {room.name}

          </span>
      </Link>
    );
  });

  return <ul className="roomsPopup menu__popup">
    <div className="roomsPopup__container">{roomsList}</div></ul>;
}

export default RoomsPopup;
