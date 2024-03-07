import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Modal, TextInput } from 'react-native';
import { useModalContext } from '../components/Modal';

// #region Components
export const ContactInfoModal = () => {
    const { toggleContactInfoModal, contactInfoModalVisible } = useModalContext(); // Use context
    
    return (
        <Modal animationType='fade' transparent={true} visible={contactInfoModalVisible} onRequestClose={() => {toggleContactInfoModal()}}>
            <View style={styles.modal}>
                <Modal.ModalNavigationInputGroup onPressCancel={toggleContactInfoModal()}/>
                <ModalDataField />
            </View>
        </Modal>
    );
};

const ModalDataField = ({ contact }) => {
    const [firstName, setFirstName] = useState(contact.first_name);
    const [lastName, setLastName] = useState(contact.last_name);
    const [address, setAddress] = useState(contact.address);
    const [email, setEmail] = useState(contact.email);
    const [phoneNumber, setPhoneNumber] = useState(contact.phone_number);

    // State to track editability of each field
    const [firstNameEditable, setFirstNameEditable] = useState(false);
    const [lastNameEditable, setLastNameEditable] = useState(false);
    const [addressEditable, setAddressEditable] = useState(false);
    const [emailEditable, setEmailEditable] = useState(false);
    const [phoneNumberEditable, setPhoneNumberEditable] = useState(false);

    return (
        <View>
            {firstNameEditable ? (
                <TextInput
                    value={firstName}
                    onChangeText={setFirstName}
                    onBlur={() => setFirstNameEditable(false)} // To close edit mode on blur
                />
            ) : (
                <View>
                    <Text>{firstName}</Text>
                    <Button title="Edit" onPress={() => setFirstNameEditable(true)} />
                </View>
            )}

            {lastNameEditable ? (
                <TextInput
                    value={lastName}
                    onChangeText={setLastName}
                    onBlur={() => setLastNameEditable(false)}
                />
            ) : (
                <View>
                    <Text>{lastName}</Text>
                    <Button title="Edit" onPress={() => setLastNameEditable(true)} />
                </View>
            )}

            {addressEditable ? (
                <TextInput
                    value={address}
                    onChangeText={setAddress}
                    onBlur={() => setAddressEditable(false)}
                />
            ) : (
                <View>
                    <Text>{address}</Text>
                    <Button title="Edit" onPress={() => setAddressEditable(true)} />
                </View>
            )}

            {emailEditable ? (
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    onBlur={() => setEmailEditable(false)}
                />
            ) : (
                <View>
                    <Text>{email}</Text>
                    <Button title="Edit" onPress={() => setEmailEditable(true)} />
                </View>
            )}

            {phoneNumberEditable ? (
                <TextInput
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    onBlur={() => setPhoneNumberEditable(false)}
                />
            ) : (
                <View>
                    <Text>{phoneNumber}</Text>
                    <Button title="Edit" onPress={() => setPhoneNumberEditable(true)} />
                </View>
            )}
        </View>
    );
};

const DeleteContactButton = () => {
    // TODO: Implement

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