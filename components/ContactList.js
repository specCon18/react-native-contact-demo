import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { useModalContext } from '../components/Modal';

// #region Components
export const ContactList = ({ names }) => {
    // Function to categorize and sort names by the first letter of the first name
    const categorizeAndSortNames = () => {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const categories = {};
        
        alphabet.forEach(letter => {
            // Extract the first name, ensure it's a string, filter by the starting letter, and sort
            const namesForLetter = names
                .filter(name => typeof name.first_name === 'string' && name.first_name.toUpperCase().startsWith(letter))
                .sort((a, b) => a.first_name.localeCompare(b.first_name)); // Sort by first_name
            
            if (namesForLetter.length > 0) {
                categories[letter] = namesForLetter;
            }
        });
        return categories;
    };

    const nameCategories = categorizeAndSortNames();

    return (
        <ScrollView style={{ flex: 1 }}>
            {Object.keys(nameCategories).map((letter) => (
                <View key={letter}>
                    <View style={styles.contact_group_header}>
                        <Text style={styles.group_text}>{letter}</Text>
                    </View>
                    <View style={styles.contact_group}>
                        {nameCategories[letter].map((contact, index) => (
                            <Text key={index} style={styles.contact_name}>{contact.first_name}</Text>
                        ))}
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export const AddContactButton = () => {
    const { toggleAddContactModal } = useModalContext();

    return (
        <Pressable style={styles.add_contact_button} onPress={toggleAddContactModal}>
            <Text style={styles.add_button_text}>Add Contact</Text>
        </Pressable>
    );
};
// #endregion

// #region StyleSheets
const styles = StyleSheet.create({
    add_contact_button: {
        backgroundColor: '#222',
        paddingTop: 10,
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    add_button_text: {
        fontSize: 20 ,
        fontWeight: '400',
        color: '#fff',
    },
    contact_group_header: {
        paddingTop: 10,
        paddingBottom: 10,
        flex: 1,
        backgroundColor: '#373737',
        justifyContent: 'center',
    },
    contact_group: {
        flex: 8,
        backgroundColor: '#3D3D3D',
        paddingTop: 10,
    },
    group_text: {
        fontSize: 40 ,
        fontWeight: '900',
        paddingLeft: 20 ,
        color: '#fff',
    },
    contact_name: {
        fontSize: 20,
        paddingTop:15,
        paddingBottom:15,
        fontWeight: '400',
        paddingLeft: 20 ,
        color: '#fff',
    },
});
// #endregion