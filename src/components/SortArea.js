import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useDispatch } from "react-redux";

const SortArea = () => {
  const dispatch = useDispatch();
  const sortItems = [
    { key: "popularity.desc", value: "인기도 내림차순" },
    { key: "popularity.asc", value: "인기도 오름차순" },
    { key: "vote_average.desc", value: "평점 내림차순" },
    { key: "vote_average.asc", value: "평점 오름차순" },
    { key: "primary_release_date.desc", value: "상영일 내림차순" },
    { key: "primary_release_date.asc", value: "상영일 오름차순" },
    { key: "revenue.desc", value: "수익 내림차순" },
    { key: "revenue.asc", value: "수익 오름차순" },
  ];
  const [title, setTitle] = useState("정렬 기준");
  const setSortBy = (key) => {
    dispatch({ type: "SET_SORT_BY_SUCCESS", payload: { sortBy: key } });

    console.log("타이틀", title);
  };

  return (
    <div className="sort-area">
      <h6>Sort Results By</h6>
      <DropdownButton
        className="sort-button"
        id="dropdown-basic-button"
        variant="danger"
        title={title}
        menuVariant="dark"
        onSelect={(eventKey) => {
          setSortBy(eventKey);
          setTitle(sortItems.find((i) => i.key === eventKey).value);
        }}
      >
        {sortItems.map((i) => (
          <Dropdown.Item eventKey={i.key}>{i.value}</Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
};

export default SortArea;
