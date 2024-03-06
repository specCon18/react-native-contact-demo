import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ModalProvider } from './components/ModalContext'; // Import ModalProvider
import { AddContactModal, AddContactButton } from './components/AddContact';
import { ContactInfoModal } from './components/ViewContact';
import { ContactList } from './components/ContactList';

// TODO: Implement AddContactModal Functionality
// TODO: Implement ContactInfoModal Functionality
  // TODO: Turn each item added to ContactList into a button to toggle ContactInfoModal
// TODO: Clean names
// TODO: Document Code
// TODO: Publish to Github

export default function App() {
  let contactList = [
    {
      "first_name": "Brittney",
      "last_name": "Doe",
      "number": "555-555-5555",
      "address": "1234 Test Lane, Cityville, Stateland, CountryBall",
      "email": "brittney@email.tld"
    },
    {
      "first_name": "Bill",
      "last_name": "Doe",
      "number": "555-555-5555",
      "address": "1234 Test Lane, Cityville, Stateland, CountryBall",
      "email": "bill@email.tld"
    },
    {
      "first_name": "Bob",
      "last_name": "Doe",
      "number": "555-555-5555",
      "address": "1234 Test Lane, Cityville, Stateland, CountryBall",
      "email": "bob@email.tld"
    },
    {
      "first_name": "Brian",
      "last_name": "Doe",
      "number": "555-555-5555",
      "address": "1234 Test Lane, Cityville, Stateland, CountryBall",
      "email": "brian@email.tld"
    },
    {
      "first_name": "Andrew",
      "last_name": "Doe",
      "number": "555-555-5555",
      "address": "1234 Test Lane, Cityville, Stateland, CountryBall",
      "email": "andrew@email.tld"
    },
    {
      "first_name": "Paul",
      "last_name": "Doe",
      "number": "555-555-5555",
      "address": "1234 Test Lane, Cityville, Stateland, CountryBall",
      "email": "paul@email.tld"
    }
  ];
  
  return (
    <ModalProvider>
      <View style={styles.container}>
        <AddContactButton />
        <ContactList names={contactList} />
        <AddContactModal />
        <ContactInfoModal />
      </View>
    </ModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#373737',
    justifyContent: 'center',
  },
});
