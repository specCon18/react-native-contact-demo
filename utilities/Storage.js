import * as FileSystem from 'expo-file-system';

const contactList = FileSystem.documentDirectory + "contact_list.json";

export async function readContacts() {
    try {
        const jsonString = await FileSystem.readAsStringAsync(contactList);
        // If the file exists and content is read successfully, parse and return the JSON data
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Error reading JSON:', error);
        // If an error occurs (e.g., file does not exist), return an empty array to initialize the contact list
        return [];
    }
}

export async function writeContacts(contact_list) {
    const jsonString = JSON.stringify(contact_list);
    try {
        await FileSystem.writeAsStringAsync(contactList, jsonString);
        console.log('JSON written successfully!');
    } catch (error) {
        console.error('Error writing JSON:', error);
    }
}