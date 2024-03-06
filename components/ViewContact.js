import React from 'react';
import { View, StyleSheet, Text, Pressable, Modal, Alert } from 'react-native';
import { useModalContext } from './ModalContext'; // Import useModalContext

export const ContactInfoModal = () => {
    const { contactInfoModalVisible, setContactInfoModalVisible } = useModalContext(); // Use context
    
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={contactInfoModalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setContactInfoModalVisible(!contactInfoModalVisible);
        }}>
                <View style={styles.modal}>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setContactInfoModalVisible(!contactInfoModalVisible)}>
                        <Text style={styles.modal_text}>Back</Text>
                    </Pressable>
                    <DeleteContactButton />
                </View>
        </Modal>
    );
};



export const DeleteContactButton = () => {
    const { deleteContactModalVisible, setDeleteContactModalVisible } = useModalContext(); // Use the context

    return (
        <View>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setDeleteContactModalVisible(!deleteContactModalVisible)}>
                <Text style={styles.group_text}>Add Contact</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    modal_text: {
        fontSize: 40 ,
        fontWeight: '900',
        paddingLeft: 20 ,
        color: '#fff',
    },
    modal: {
        backgroundColor:'#3d3d3d'
    }
});