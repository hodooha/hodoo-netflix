import React from "react";
import "react-input-range/lib/css/index.css";
import YearFilter from "./YearFilter";
import JenreFilter from "./JenreFilter";

const FilterArea = () => {
  return (
    <div>
      <YearFilter></YearFilter>
      <JenreFilter></JenreFilter>
    </div>
  );
};

export default FilterArea;
