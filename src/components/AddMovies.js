import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddMovies.css";

export default function AddMovies(props) {
  const [todosmovie, setodosmovie] = useState({});
  const hendleChange = (el) => {
    setodosmovie({ ...todosmovie, [el.target.name]: el.target.value });
  };
  // console.log({ todosmovie });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <h1>+</h1>
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="modalInput">
              <label>Name of movies :</label>
              <input
                type="text"
                name="name"
                className="clinput"
                value={todosmovie.name}
                onChange={hendleChange}
              ></input>
            </div>
            <div className="modalInput">
              <label>Src img of movies :</label>
              <input
                type="text"
                name="image"
                value={todosmovie.image}
                className="clinput"
                onChange={hendleChange}
              ></input>
            </div>
            <div className="modalInput">
              <label>Rating of movies :</label>
              <input
                type="text"
                name="rating"
                className="clinput"
                value={todosmovie.rating}
                onChange={hendleChange}
              ></input>
            </div>
            <div className="modalInput">
              <label>Year of movies :</label>
              <input
                type="text"
                name="year"
                className="clinput"
                value={todosmovie.year}
                onChange={hendleChange}
              ></input>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              props.addM(todosmovie);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
