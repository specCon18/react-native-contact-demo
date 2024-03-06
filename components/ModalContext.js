import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [addContactModalVisible, setAddContactModalVisible] = useState(false);
    const [contactInfoModalVisible, setContactInfoModalVisible] = useState(false);

    const toggleAddContactModal = () => {
        setAddContactModalVisible(!addContactModalVisible);
    };

    const toggleContactInfoModal = () => {
        setContactInfoModalVisible(!contactInfoModalVisible);
    };

    return (
        <ModalContext.Provider value={{ addContactModalVisible, toggleAddContactModal, contactInfoModalVisible, toggleContactInfoModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => useContext(ModalContext);