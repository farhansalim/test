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
import DetailComponent from '../../components/DetailComponent';

const DetailsScreen = ({ route }) => {
  const { user } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.subContainer}>
        <View style={{ padding: 10, alignItems: "center" }}>
          <Text style={styles.titleStyle}>{user.name}</Text>
          <Image
            style={{ width: 250, height: 250, resizeMode: 'contain', borderRadius: 15 }}
            source={{ uri: user.profile_image }}
          />
        </View>
        <DetailComponent title={"Email"}
          subTitle={user.email}>
        </DetailComponent>
        <DetailComponent title={"Name"}
          subTitle={user.name}>
        </DetailComponent>
        <DetailComponent title={"Username"}
          subTitle={user.username}>
        </DetailComponent>
        <DetailComponent title={"Address"}
          subTitle={`${user.address.suite}\n${user.address.street}\n${user.address.city}\n${user.address.zipcode}`}>
        </DetailComponent>
        <DetailComponent title={"Company Details"}
          subTitle={`${user.company.name}\n${user.company.catchPhrase}\n${user.company.bs}`}>
        </DetailComponent>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailsScreen;

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
