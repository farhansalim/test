import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';

const UserComponent = (props) => {
    const { name, img, email, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text>
                {name}
            </Text>
            <Image style={styles.image}
                source={{ uri: img }}>
            </Image>
            <Text>
                {email}
            </Text>


        </TouchableOpacity>

    )
}
export default UserComponent;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // height: 45,
        backgroundColor: "#b5c9c0",
        // height:100,
        borderRadius: 6,
        padding: 10,
        marginBottom: 10
    },
    image: {
        height: 100,
        width: 100
    }

});
