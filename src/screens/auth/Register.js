import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, TextInput, Text } from 'react-native'
import PrimaryButton from '../../components/common/PrimaryButton';
import * as authActions from '../../store/actions/AuthActions/AuthActions';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Toast from 'react-native-simple-toast';
class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        }
    }
    handleSignUp = () => {
        const { actions } = this.props;
        const { name, email, password, password_confirmation } = this.state
        let body = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }
        if (name === "" || email === "" || password === "" || password_confirmation === "") {
            Toast.show('Fill the fields')
        }
        else {
            actions.auth.onSignUp(body)
                .then(res => {
                    if (res && res.access_token) {
                        Toast.show('Registration Completed')
                    }
                    else {
                        Toast.show('Registration Failed')
                    }
                })
                .catch(err => {
                    Toast.show("Failed.Try Again")
                })
        }

    }
    render() {
        const { navigation } = this.props;
        return (

            <SafeAreaView style={styles.conatiner}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={styles.scrollContainer}
                    nestedScrollEnabled>

                    <View style={styles.headContainer}>

                        <Text style={styles.maintext}>Register account  </Text>
                    </View>

                    <View style={styles.bodyContainer}>

                        <TextInput
                            style={styles.input}
                            placeholder="name"
                            onChangeText={(val) => this.setState({ name: val })}
                            value={this.state.name}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="email"
                            onChangeText={(val) => this.setState({ email: val })}
                            value={this.state.email}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="password"
                            onChangeText={(val) => this.setState({ password: val })}
                            value={this.state.password}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="confirm password"
                            onChangeText={(val) => this.setState({ password_confirmation: val })}
                            value={this.state.password_confirmation}
                        />
                        <View style={{ paddingTop: 15 }}>
                            <PrimaryButton
                                title="Create account"
                                style={styles.butonContainer}
                                color={['#2B3FD9', '#E344D7']}
                                txtStyle={styles.buttonText}
                                onPress={() => this.handleSignUp()}
                            />
                        </View>
                        <Text onPress={() => navigation.navigate('LoginScreen')} style={styles.bottomText}>
                            Already have an account? <Text style={{ color: "#2E3ED9", }}>Login</Text>
                        </Text>


                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actions: {
            auth: bindActionCreators(authActions, dispatch),
        },
    };
};

export default compose(connect(null, mapDispatchToProps))(RegisterScreen);
const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
    },
    scrollContainer: {
        // paddingLeft: 16,
        // paddingRight: 15,
        paddingBottom: 20,
    },
    butonContainer: {
        justifyContent: 'center',
        height: 53,
        borderRadius: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
        alignSelf: 'center',

    },
    headContainer: {
        paddingHorizontal: 50
    },
    bodyContainer: {
        paddingHorizontal: 41,
        // backgroundColor:"yellow",
        justifyContent: "space-evenly"
    },

    maintext: {
        fontSize: 25,
        paddingTop: 90
    },

    bottomText: {
        marginTop: 29,
        fontSize: 15,

        alignSelf: 'center'
    },
    bottomText: {
        marginTop: 29,
        fontSize: 15,

        alignSelf: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

});
