
// import AreaChart from "../../../components/Charts";

import { useState } from "react";
import { CloseButton } from "react-bootstrap";
import { DataObject } from "../../thor/model";
import DraggableModal from "../DraggableModal";
import ModalPicker from "../ModalPicker";
import "./index.css";

interface FloatingControlPanelProps {
    data?: DataObject;
    description: string;
    className?: string;
    style?: any;
    children?: React.ReactNode;
}
export const FloatingControlPanel: React.FC<FloatingControlPanelProps> = ({ data, description, children }) => {

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
                    <div className="floating-toolbar" >

                        {children}

                    </div>
                </>

                }
            />
        </>
    );
}

export default FloatingControlPanel;
