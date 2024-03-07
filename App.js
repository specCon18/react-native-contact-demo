import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ModalProvider } from './components/Modal';
import { AddContactModal } from './components/AddContact';
import { ContactInfoModal } from './components/ViewContact';
import { ContactList, AddContactButton } from './components/ContactList';

// TODO: Move all contact helper methods into their own util class
// TODO: AddContact.js
  // TODO: Add global constent that stores contact list
  // TODO: create contact_list global states accompanying changeFunction
  // TODO: Ammend AddContact.addNewContactToList() to also set the contact_list state to current when saving so the new contact is rendered
// TODO: ViewContact.js
  // TODO: Implement ContactInfoModal Functionality
  // * Display the following editible fields all fields are not editible till the edit button is pressed
    // first name
    // last name
    // email
    // address
    // phone number
  // * Turn each item added to ContactList into a button to toggle ContactInfoModal
// TODO: Clean names
  // ! remember verb+noun phrases
// TODO: Document Code
// TODO: Publish to Github
// ? TODO: Implement Share Contact by QR if time permits
// ? TODO: Figure out xdg equivilent to link to email and maps and dialer if time permits


//#region Components
export default function App() {
  return (
    <ModalProvider>
      <View style={styles.container}>
        <AddContactButton />
        <ContactList names={Storage.readContacts()} />
        <AddContactModal />
        <ContactInfoModal />
      </View>
    </ModalProvider>
  );
}
//#endregion

//#region StyleSheets
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#373737',
    justifyContent: 'center',
  },
});
//#endregion