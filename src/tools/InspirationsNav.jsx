import React from "react";
import { Link } from "react-router-dom";
function InspirationsNav() {
  return (
    <div className="inspirations__nav">
      <Link to="/inspirations" className=" halmar__header inspirations__nav-header">
        zobacz nasze{" "}
        <span className="halmar__header--bold inspirations__nav-header--bold">inspiracje</span>
      </Link>

      <Link to="/inspirations" className="inspirations__nav-link">
        zobacz wszystkie
        <i className="halmar-icon_30 inspirations__nav-icon"></i>
      </Link>
    </div>
  );
}

export default InspirationsNav;
