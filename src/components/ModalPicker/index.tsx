import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OasOpenAPISpecTable from '../../thor/redux/components/table/OasOpenAPISpecTable';
import "./index.css";
const ModalPicker = ({ title, toggle, showModal }) => {

    return (
        <>

            <Modal
                show={showModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Select from the following items:
                </Modal.Body>
                <div className="grid-container{">
                    <OasOpenAPISpecTable />
                </div>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => { toggle() }}>Cancel</Button>
                    <Button variant="secondary" onClick={() => { toggle() }}>Select</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPicker;