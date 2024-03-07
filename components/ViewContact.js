import React from 'react';
import { View, StyleSheet, Text, Pressable, Modal } from 'react-native';
import { useModalContext } from '../components/Modal';

// #region Components
export const ContactInfoModal = () => {
    const { toggleContactInfoModal, contactInfoModalVisible } = useModalContext(); // Use context
    
    return (
        <Modal animationType='fade' transparent={true} visible={contactInfoModalVisible} onRequestClose={() => {toggleContactInfoModal()}}>
            <View style={styles.modal}>
                <Modal.ModalNavigationInputGroup onPressCancel={toggleContactInfoModal()}/>
                <ModalTextInputGroup />
            </View>
        </Modal>
    );
};

const ModalDataField = (contact) => {

}

const DeleteContactButton = () => {
    // TODO: Implement
    //const { deleteContactModalVisible, setDeleteContactModalVisible } = useModalContext();

    return (
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setDeleteContactModalVisible(!deleteContactModalVisible)}>
            <Text style={styles.group_text}>Add Contact</Text>
        </Pressable>
    );
};
// #endregion

// #region StyleSheets
const styles = StyleSheet.create({
    modal: {
        backgroundColor:'#3d3d3d'
    }
});
// #endregion