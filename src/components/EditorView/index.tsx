import { Modal } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import CoolButton from "../CoolButton";

interface EditorModalProps {
    show: boolean;
    editorContent: any;
    callback: (title?: string, form?: JSX.Element) => void;
}


const EditorView: React.FC<EditorModalProps> = ({ show, editorContent, callback }) => {
    
    return (
        <Modal
            show={show}
            className={"editorDialog"}
            title="Percival the Dragon Slayer Editor"
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    <FaEdit size={28} color="orange" /> Percival the Dragon Slayer Editor
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={"editorDialogMessage"}>
                Open {editorContent} for editing in a new tab?
            </Modal.Body>
            <Modal.Footer>
                <CoolButton
                    variant={"info"}
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={() => callback()}
                >
                    Edit
                </CoolButton>
            </Modal.Footer>
        </Modal>
    );
};

export default EditorView;
