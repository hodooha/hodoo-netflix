import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faXmark } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import { useSelector } from "react-redux";

const Trailer = () => {
  const { trailer } = useSelector((state) => state.movie);
  const [show, setShow] = useState(false);
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className="trailer" onClick={() => setShow(true)}>
        <FontAwesomeIcon icon={faFilm} />
      Watch Trailer
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-dialog-detail"
        contentClassName="modal-content-detail"
      >
        <FontAwesomeIcon
          className="modal-x-btn"
          icon={faXmark}
          onClick={() => setShow(false)}
        />

        <YouTube
          className="video"
          videoId={trailer.results && trailer.results[0].key}
          opts={opts}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </Modal>
    </div>
  );
};

export default Trailer;
