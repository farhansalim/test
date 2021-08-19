import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native'
import CustomInput from '../../components/common/CustomInput';
import PrimaryButton from '../../components/common/PrimaryButton';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Toast from 'react-native-simple-toast';
import * as authActions from '../../store/actions/AuthActions/AuthActions';


class LoginScreeen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            // email: "qwerty@gmail.com",
            // password: "qwerty",
            formError: null,
        }
    }
    componentDidMount() {
        this._isMounted = true;
    }
    handleSignIn = async () => {
        const { actions } = this.props;
        const { email, password } = this.state
        let body = {
            email: this.state.email,
            password: this.state.password
        }
        if (email === "" || password === "") {
            Toast.show('Fill the fields')
        }
        else {
            actions.auth.onLogin(body)
                .then(res => {
                    if (res && res.access_token) {

                        this.props.navigation.replace('Home', {
                            screen: 'HomeScreen',
                            params: {
                                // param: param_data,
                            },
                        });
                    }
                    else {
                        Toast.show(res.error)
                    }
                })
                .catch(err => {
                    // Toast.show("Failed.Try Again")
                })
        }

    }

    render() {
        const { errors, onSubmit, ForgotPassword, navigation } = this.props;
        const { formError, modalVisible } = this.state;
        return (
            <>
                {/* <Loader visible={modalVisible} /> */}
                <SafeAreaView style={styles.conatiner}>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyboardShouldPersistTaps="handled"
                        contentContainerStyle={styles.scrollContainer}
                        nestedScrollEnabled>
                        <View style={styles.headContainer}>
                            <Text style={styles.maintext}>Login </Text>

                        </View>

                        <View style={styles.bodyContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                onChangeText={(val) => this.setState({ email: val })}
                                value={this.state.email}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Password"
                                onChangeText={(val) => this.setState({ password: val })}
                                value={this.state.password}
                                secureTextEntry={true}
                            />


                            <PrimaryButton
                                title=" Sign In"
                                style={styles.butonContainer}
                                color={['#2B3FD9', '#E344D7']}
                                txtStyle={styles.buttonText}
                                onPress={() => this.handleSignIn()}
                            />
                            <Text onPress={() => navigation.navigate('RegisterScreen')} style={styles.bottomText}>
                                If you Don’t have an account? <Text style={{ color: "#2E3ED9", fontSize: 15 }}>Register Account</Text>
                            </Text>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
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

export default compose(connect(null, mapDispatchToProps))(LoginScreeen);
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
        paddingHorizontal: 50,
        paddingTop: 100
    },
    bodyContainer: {
        paddingHorizontal: 41,
        justifyContent: "space-between",
    },
    maintext: {
        fontSize: 25,
    },

    bottomText: {
        marginTop: 29,
        fontSize: 14,
        alignSelf: 'center'
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
