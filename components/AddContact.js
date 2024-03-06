import React from 'react';
import { View, StyleSheet, Text, Pressable, Modal, Alert } from 'react-native';
import { useModalContext } from './ModalContext';

export const AddContactModal = () => {
    const { toggleAddContactModal, addContactModalVisible } = useModalContext();
    
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={addContactModalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                toggleAddContactModal();
        }}>
                <View style={styles.modal}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => toggleAddContactModal()}>
                        <Text style={styles.modal_text}>Back</Text>
                    </Pressable>
                </View>
        </Modal>
    );
};

export const AddContactButton = () => {
    const { toggleAddContactModal } = useModalContext();

    return (
        <View style={styles.add_contact_button}>
            <Pressable
                style={styles.button}
                onPress={toggleAddContactModal}>
                <Text style={styles.add_button_text}>Add Contact</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    add_contact_button: {
        backgroundColor: '#222',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: "center"
    },
    modal_text: {
        fontSize: 40 ,
        fontWeight: '900',
        paddingLeft: 20 ,
        color: '#fff',
    },
    add_button_text: {
        fontSize: 20 ,
        fontWeight: '400',
        color: '#fff',
    },
    modal: {
        backgroundColor:'#3d3d3d'
    }
});