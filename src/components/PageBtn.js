import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { useSelector, useDispatch } from "react-redux";

const PageBtn = () => {
  const dispatch = useDispatch();
  const { page, searchResults, error } = useSelector((state) => state.movie);
  const groupSize = 5;
  let totalPages =
    searchResults.total_pages >= 500 ? 500 : searchResults.total_pages;
  let currentGroup = Math.ceil(page / groupSize);

  let pageNumbers = [];
  for (
    let i = (currentGroup - 1) * groupSize + 1;
    i <= (totalPages <= 5 ? totalPages : currentGroup * groupSize);
    i++
  ) {
    pageNumbers.push(i);
  }

  const moveToPage = (num) => {
    dispatch({ type: "MOVE_PAGE_SUCCESS", payload: { page: num } });
  };

  return (
    <div className="pagination-area">
      <Pagination>
        <Pagination.First
          className={page === 1 ? "pagination-disabled" : ""}
          onClick={() => moveToPage(1)}
        />
        <Pagination.Prev
          className={page === 1 ? "pagination-disabled" : ""}
          onClick={() => moveToPage(page - 1)}
        />
        {pageNumbers.map((i) => (
          <Pagination.Item
            className={page === i ? "pagination-active" : ""}
            onClick={() => {
              moveToPage(i);
            }}
          >
            {i}
          </Pagination.Item>
        ))}
        <Pagination.Next
          className={page === totalPages ? "pagination-disabled" : ""}
          onClick={() => {
            moveToPage(page + 1);
          }}
        />
        <Pagination.Last
          className={page === totalPages ? "pagination-disabled" : ""}
          onClick={() => moveToPage(totalPages)}
        />
      </Pagination>
    </div>
  );
};

export default PageBtn;
