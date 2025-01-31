import { Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

// import AreaChart from "../../../components/Charts";

import { useState } from "react";
import { FaBrain, FaCalculator, FaCalendar, FaCogs, FaEdit, FaGithubAlt, FaRegTrashAlt, FaRegWindowClose, FaSave } from "react-icons/fa";
import { DataObject } from "../../thor/model";
import DraggableModal from "../DraggableModal";
import ModalPicker from "../ModalPicker";
import "./index.css";

interface FloatingToolbarProps {
    data?: DataObject;
    description: string;
}

export const FloatingToolbar: React.FC<FloatingToolbarProps> = ({ data, description }) => {
    const [showPicker, setShowPicker] = useState(false);

    const [showModal, setShowModal] = useState(true);

    const togglePicker = () => {
        setShowPicker(!showPicker);
    }
    const toggleToolbar = () => {
        setShowModal(!showModal);
    }
    return (
        <>
            <ModalPicker toggle={togglePicker} title="Select a Spec to Load" showModal={showPicker} />

            <DraggableModal
                toggle={
                    toggleToolbar
                }
                showModal={showModal}
                title={description}
                body={<>
                    <FaRegWindowClose className="close-button" size={24} onClick={() => toggleToolbar()} />
                    <div className="floating-toolbar" >

                        <ButtonToolbar aria-label="Toolbar with button groups">
                            <ButtonGroup className="me-2" aria-label="First group">

                                <Button onClick={() => togglePicker()} variant="dark" size="sm" ><FaSave size={36} color="#ff9900" /></Button>
                                <Button onClick={() => { alert('ya') }} variant="dark" size="sm" ><FaGithubAlt size={36} color="#ff9900" /></Button>
                                <Button onClick={() => { alert('ya') }} variant="dark" size="sm" ><FaCalendar size={36} color="#ff9900" /></Button>


                            </ButtonGroup>
                            <ButtonGroup className="me-2" aria-label="Second group">
                                <Button onClick={() => { alert('ya') }} variant="dark" size="sm" ><FaCalculator size={36} color="#ff9900" /></Button>
                                <Button onClick={() => { alert('ya') }} variant="dark" size="sm" ><FaBrain size={36} color="#ff9900" /></Button>
                                <Button onClick={() => { alert('ya') }} variant="dark" size="sm" ><FaEdit size={36} color="#ff9900" /></Button>
                            </ButtonGroup>
                            <ButtonGroup aria-label="Third group">
                                <Button onClick={() => { alert('ya') }} variant="dark" size="sm" ><FaCogs size={36} color="#ff9900" /></Button>

                                <Button onClick={() => { alert('ya') }} variant="dark" size="sm" ><FaRegTrashAlt size={36} color="#ff9900" /></Button>
                            </ButtonGroup>
                        </ButtonToolbar>

                    </div>
                </>

                }
            />
        </>
    );
}

export default FloatingToolbar;
