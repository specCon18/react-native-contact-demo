import { Pressable, View, Text, createContext, useState, useContext } from "react-native"

//#region Components
export const ModalNavigationInputGroup = (onPressCancel, onPressSubmit) => {
    let onPressCancelDeclared, onPressSubmitDeclared;
    if (onPressCancel === undefined) {
        onPressCancelDeclared = false;
    } else {
        onPressCancelDeclared = true;
    }
    if(onPressSubmit === undefined) {
        onPressSubmitDeclared = false;
    } else {
        onPressSubmitDeclared = true;
    }
    let navigationButtons = [onPressCancelDeclared,onPressSubmitDeclared];
    switch(navigationButtons){
        case(navigationButtons[0] == true, navigationButtons[1] == true):
            return (
                <View style={styles.modal_nav}>
                    <ModalCancelBtn onPress={onPressCancel} />
                    <ModalSubmitBtn onPress={onPressSubmit} />
                </View>
            )
        case(navigationButtons[0] == false, navigationButtons[1] == false):
            return (
                <View style={styles.modal_nav}>
                </View>
            )
        case(navigationButtons[0] == false, navigationButtons[1] == true):
            return (
                <View style={styles.modal_nav}>
                    <ModalSubmitBtn onPress={onPressSubmit} />
                </View>
            )
        case(navigationButtons[0] == true, navigationButtons[1] == false):
            return (
                <View style={styles.modal_nav}>
                    <ModalCancelBtn onPress={onPressCancel} />
                </View>
            )
    }

}

const ModalCancelBtn = (onPress) => {
    return (
        <Pressable style={styles.cancel_button} onPress={() => onPress}>
            <Text style={styles.modal_text}>↩</Text>
        </Pressable>
    )
}

const ModalSubmitBtn = (onPress) => {
    return (
        <Pressable style={styles.submit_button} onPress={() => onPress}>
            <Text style={styles.modal_text}>+</Text>
        </Pressable>
    )
}
//#endregion

//#region Helper Functions
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
//#endregion

//#region StyleSheet
const styles = StyleSheet.create({
    modal_nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    hidden:{
        visibility: hidden,
    },
    visible:{
        visibility: visible,
    },
    submit_button:{
        paddingRight: 20
    },
    cancel_button:{
        paddingLeft: 20
    },
    modal_text: {
        fontSize: 40 ,
        fontWeight: '900',
        paddingLeft: 20 ,
        color: '#fff',
    },
});
//#endregion