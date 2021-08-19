import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const PrimaryButton = props => {
    const { title, style, txtStyle, color, onPress, iconName, iconSize, disabled } = props;
    return (
        <TouchableOpacity
            onPress={onPress} disabled={disabled} style={[styles.container, style]}>

            <View style={styles.textContainer}>
                {iconName &&
                    <View style={{ marginTop: 10 }}>
                        <Icon name={iconName} size={iconSize} color="#FFFFFF" />
                    </View>}
                <Text style={[styles.buttonText, txtStyle]}>
                    {title}
                </Text>
            </View>

        </TouchableOpacity>
    );
};
export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        height: 53,
        borderRadius: 15,
        backgroundColor:"black"
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        alignSelf: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});
