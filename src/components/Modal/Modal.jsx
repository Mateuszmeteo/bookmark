
import React from 'react';
import Modal from 'react-modal';
import { ReactSVG } from 'react-svg'


import iconClose from './../../images/icon-close.svg';
import LinksDesktop from '../Features/LinksDesktop';
import Easy from '../Features/Easy';

import styles from './modal.module.scss'

const ModalPop = ({ isOpen, onRequestClose }) => {


  return (
    <Modal className={styles.modalBox}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
        <div className={styles.modalDiv}>
            <button className={styles.modalButton} onClick={onRequestClose}>
                <ReactSVG
                    src={iconClose}
                    beforeInjection={(svg) => {
                    svg.classList.add(styles.modalButton__close);
                        }}
                    alt="close"
                />
            </button>
            <LinksDesktop />
            <Easy />
        </div>
      
    </Modal>
  );
};

export default ModalPop;
