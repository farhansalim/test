import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
} from 'react-native';


const SplashScreen = ( props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
          <View style={styles.subContainer}>
              <Text style={styles.titleStyle}>
                  SplashScreen
              </Text>

          </View>
       
      </ScrollView>
    </SafeAreaView>
  )
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FC',
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: colors.primaryColor,
  },
  titleStyle: {
    // color: colors.whiteTextColor,
    fontSize: 20,
    marginBottom: 20
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
    paddingHorizontal: 15
  }
});
