import React from 'react';
import { View, StyleSheet, TextInput, Modal } from 'react-native';
import { useModalContext } from '../components/Modal';
import * as Storage from '../utilities/Storage';

// #region Components
export const AddContactModal = () => {
    const { toggleAddContactModal, addContactModalVisible } = useModalContext();

    return (
        <Modal animationType='fade' transparent={true} visible={addContactModalVisible} onRequestClose={() => {toggleAddContactModal()}}>
            <View style={styles.modal}>
                <Modal.ModalNavigationInputGroup onPressCancel ={toggleAddContactModal()}onPressSubmit={addNewContactToList(createNewContact())}/>
                <ModalTextInputGroup />
            </View>
        </Modal>
    );
};

const ModalTextInputGroup = () => {
    const [
        email, onChangeEmail,
        phone_number, onChangePhoneNumber,
        address, onChangeAddress,
        last_name, onChangeLastName,
        first_name, onChangeFirstName
    ] = React.useState('');
    return (
        <>
            <ModalTextField 
                placeholder={"First Name"}
                value={first_name}
                onChangeText={onChangeFirstName}
            />
            <ModalTextField
                placeholder={"Last Name"}
                value={last_name}
                onChangeText={onChangeLastName}
            />
            <ModalTextField
                placeholder={"Home Address"}
                value={address}
                onChangeText={onChangeAddress}
            />
            <ModalTextField
                placeholder={"E-Mail Address"}
                value={email}
                onChangeText={onChangeEmail}
            />
            <ModalTextField
                placeholder={"Phone Number"}
                value={phone_number}
                onChangeText={onChangePhoneNumber}
            />
        </>
    )
}

const ModalTextField = (placeholder,value,onChangeText) => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={value}
            placeholder = {placeholder}
            placeholderTextColor={'#fff'}
        />
    )
}
// #endregion

// #region Helper Functions
function createNewContact(first_name,last_name,address,email,phone_number){
    return({
        "first_name": first_name,
        "last_name": last_name,
        "number": phone_number,
        "address": address,
        "email": email
    })
}

async function addNewContactToList(newContact) {
    let contact_list = await Storage.readContacts();
    contact_list.push(newContact);
    await Storage.writeContacts(contact_list);
}
// #endregion

// #region Stylesheet
const styles = StyleSheet.create({

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
    },
    modal: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
    },
});
// #endregion