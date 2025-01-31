import React from "react";

import { Modal } from "react-bootstrap";
import { FiAlertTriangle } from "react-icons/fi";
import CoolButton from "../CoolButton";

interface ErrorModalProps {
  errorMessage: any;
  callback?: any;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ errorMessage, callback }) => {
  return (
    <Modal
      show={true}
      className={"errorDialog"}
      title="Error"
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <FiAlertTriangle size={28} color="orange" /> Error
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={"errorDialogMessage"}>{errorMessage}</Modal.Body>
      <Modal.Footer>
        <CoolButton
          variant={"info"}
          data-dismiss="alert"
          aria-label="Close"
          onClick={() => callback()}
        >
          Ok
        </CoolButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
