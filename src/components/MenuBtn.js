import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import SortArea from "./SortArea";
import FilterArea from "./FilterArea";

const MenuBtn = ({ name }) => {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div>
      <div className="menu">
        <div className="menu-title" onClick={() => setmenuOpen(!menuOpen)}>
          {name}
          <span>
            {menuOpen === true ? (
              <FontAwesomeIcon icon={faArrowDown} />
            ) : (
              <FontAwesomeIcon icon={faArrowRight} />
            )}
          </span>
        </div>
        {menuOpen === true ? (
          name === "Sort" ? (
            <SortArea></SortArea>
          ) : (
            <FilterArea></FilterArea>
          ) 
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MenuBtn;
