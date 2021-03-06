import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props:any) => {

    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    );

};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 40,
        overflow: 'hidden',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderRadius: 2,
        borderTopColor: '#ccc',
        borderBottomColor: '#ccc',
        borderRightColor: '#ccc',
        borderWidth: 1,
    }
});

export default Card;