
import React from 'react';
import { CloseButton, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Form from './form';
import "./index.css";



const LoginModal: React.FC = (visible: boolean, toggle: any) => {
    const navigate = useNavigate();



    return (
        <Modal
            show={true}
        >
            <Modal.Header>
                Sign into your Peragon Games user account
                <CloseButton onClick={() => toggle()} />

            </Modal.Header>

            <Modal.Body>
                <Form />
            </Modal.Body>

        </Modal >
    );
};

export default LoginModal;

