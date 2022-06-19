import { useEffect, useState } from 'react';
import Modal from "react-modal"
import { Form } from '../form/form';
import styles from './modal.module.scss'

interface FormModalProps {
    cursorLocal: number
}

export function FormModal( { cursorLocal }: FormModalProps ){

    const [isOpen, setIsOpen] = useState(false);
    const [openedOneTime, setOpenedOneTime] = useState(false);

    function onRequestClose() {
        setIsOpen(false)
    }

    useEffect(() => {
        if(cursorLocal <=  10 && openedOneTime == false) {

            setOpenedOneTime(true);
            setIsOpen(true);
            
        }

    }, [cursorLocal]);

    return(
        <>
            <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            >   

                <button type="button" onClick={onRequestClose} className="react-modal-close">
                    <span>X</span>
                </button>

                <div id="form" className={styles.modal_section}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={styles.modal_major_content}>
                                    <h6>Já vai? espera um pouco, temos um E-book grátis para você! preencha o formulario abaixo, e ele será enviado no seu e-mail</h6>
                                    
                                    <Form />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
        
    )
}