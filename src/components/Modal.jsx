import React from 'react';

/* Modal Material UI */
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export const ModalWindow = ({updateUser, open}) => {

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className="modal"
            open={open}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className="modal__paper">
                <div className="modal__header">
                    <h2 id="transition-modal-title">Congratulations</h2>
                    <span onClick={updateUser}>x</span>
                </div>
                <div className="modal__body">
                    You have successfully passed the registration
                </div>
                <div className="modal__footer">
                    <button 
                        className="modal__footer-btn" 
                        onClick={updateUser}
                    >
                        Great
                    </button>
                </div>
            </div>
            </Fade>
        </Modal>
    )
}