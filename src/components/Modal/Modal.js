import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./Modal.css";

function PopupModal() {
  const [show, setShow] = useState(true);
  const [hideModalForFutureVisits, setHideModalForFutureVisits] = useState(false);

  const handleClose = () => {
    if (hideModalForFutureVisits) {
      localStorage.setItem("hideModalForFutureVisits", true);
    }
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Welcome to my proof of concept website!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="text" alt="email me at ...">
          This is a test website and is only intended to be for potential employers/clients. If you have any questions, feedback, or just want to say hello, please send me an email at <a href="mailto:your-email-address">your-email-address</a>.
        </p>
        <Form.Check
          type="checkbox"
          label="Hide this message for future visits"
          checked={hideModalForFutureVisits}
          onChange={(event) => setHideModalForFutureVisits(event.target.checked)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PopupModal;

