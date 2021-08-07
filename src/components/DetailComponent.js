import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    SafeAreaView,
    Image,
    Text,
} from 'react-native';

const DetailComponent = (props) => {
    const { title, subTitle } = props;
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.detailsContainer}>
                <View style={{ flex: 1.5 }}>
                    <Text style={styles.subTitleStyle}>{title} </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.subTitleStyle}>:</Text>
                </View>
                <View style={{ flex: 2.5}}>
                    <Text style={styles.subTitleStyle}>{subTitle}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F6FC',
    },
    subContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: colors.primaryColor,
    },
    titleStyle: {
        // color: colors.whiteTextColor,
        fontSize: 20,
        marginBottom: 10
    },
    subTitleStyle: {
        // color: colors.whiteTextColor,
        fontSize: 14,
    },
    textcontainer: {
        padding: 10,
    },
    detailsContainer: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingBottom:10
    }
});
