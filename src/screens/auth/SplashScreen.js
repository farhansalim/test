import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
} from 'react-native';

const SplashScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.titleStyle}>
          SplashScreen
        </Text>
      </View>
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
  },
  titleStyle: {
    fontSize: 20,
    marginBottom: 20
  },
  subTitleStyle: {
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
