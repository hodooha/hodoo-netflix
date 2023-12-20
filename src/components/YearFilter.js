import React, { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useDispatch } from "react-redux";

const YearFilter = () => {
  const [value, setValue] = useState({ min: 1900, max: 2023 });
  const dispatch = useDispatch();

  const setFilterByYear = (value) => {
    dispatch({ type: "SET_FILTER_BY_YEAR", payload: { filterByYear: value } });
  };
  return (
    <div className="filter-area">
      <h5>YEAR Filter</h5>
      <p>
        From: <span>{value.min}</span> - To: <span>{value.max}</span>
      </p>
      <InputRange
        maxValue={2023}
        minValue={1900}
        value={value}
        onChange={(value) => setValue(value)}
        onChangeComplete={(value) => setFilterByYear(value)}
      />
    </div>
  );
};

export default YearFilter;
