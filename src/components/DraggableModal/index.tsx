
import { Modal } from 'react-bootstrap';
import Draggable from 'react-draggable';
import { FaRegWindowMaximize } from 'react-icons/fa';
import "./index.css";

const DraggableModal = ({ title, toggle, body, showModal }) => {
    return (
        <>
            {!showModal && (
                <FaRegWindowMaximize size={35} onClick={() => toggle()} />

            )}
            {showModal && (

                <Draggable handle=".modal-header" >
                    <div className='dragg-it'>
                        <Modal.Header>
                            <Modal.Title>{title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{body}</Modal.Body>
                    </div>
                    
                </Draggable>

            )}
        </>
    );
};

export default DraggableModal;