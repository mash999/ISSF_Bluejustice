import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';


const ModalPicker = props => {
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visibility}
            // onRequestClose={() => {
            //     setModalVisibility(!modalVisibility);
            // }}
        >
            <View style={{...styles.modalContainer, ...props.modalStyle}}>
                {props.children}
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'red', 
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        left: 0, 
        top: 0
    }
});


export default ModalPicker;