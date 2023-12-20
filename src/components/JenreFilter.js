import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Badge from "react-bootstrap/Badge";

const JenreFilter = () => {
  const { genreList } = useSelector((state) => state.movie);
  const [activeJenre, setActiveJenre] = useState("");
  const dispatch = useDispatch();

  const setFilterByJenre = (event) => {
    let id = event.currentTarget.id === "all" ? "" : event.currentTarget.id;
    setActiveJenre(id);
    dispatch({
      type: "SET_FILTER_BY_JENRE",
      payload: {
        filterByJenre: id,
      },
    });
  };
  return (
    <div>
      <div className="genre-area">
        <h5>JENRE Filter</h5>
        <div className="genre-badges">
          <div onClick={setFilterByJenre} id="all">
            <Badge
              className={activeJenre == "" ? "active-jenre" : ""}
              bg="danger"
            >
              All
            </Badge>
          </div>
          {genreList &&
            genreList.map((i) => (
              <div onClick={setFilterByJenre} id={i.id}>
                <Badge
                  className={activeJenre == i.id ? "active-jenre" : ""}
                  bg="danger"
                >
                  {i.name}
                </Badge>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default JenreFilter;
