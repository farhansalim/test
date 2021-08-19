import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/auth/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailPage from '../screens/home/DetailScreen';
import AuthenticationNavigator from '../navigators/AuthNavigator'
import LocalStorage from '../config/LocalStorage';
import HomeNavigator from './HomeNavigator';
import * as HomeActions from './../store/actions/HomeActions/HomeActions';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

const AuthNavigator = createStackNavigator();
const THEME_COLOR = '#285E29';

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            userData: null,
        };
    }

    splashTime = () => {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 2000);
    };

    componentDidMount() {
        this.splashTime();
        this.getLocalUserData();
    }

    getLocalUserData = async () => {
        const { actions } = this.props;
        let userLog = await LocalStorage.getData();
        if (userLog !== null) {
            actions.home.getFilmsList(userLog)
                .then(res => {
                    res.status === 401 ?
                        this.setState({ userData: null, })
                        : this.setState({ userData: userLog, }, async () => {
                            await LocalStorage.storeLoginDetailData(userLog);
                        })
                })
                .catch(err => {
                    this.setState({ userData: null, })
                })
        }
        if (userLog !== null) {
            console.log(userLog)
        }
    }


    render() {
        const { loading, hasToken } = this.state;
        if (loading) {
            return <SplashScreen />;
        }
        else {
            return (
                <NavigationContainer independent={true} >
                    {this.state.userData !== null ? (
                        <AuthNavigator.Navigator independent={true} presentation="transparentModal" initialRouteName="Home">
                             <AuthNavigator.Screen
                                    name={'Home'}
                                    component={HomeNavigator}
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                            <AuthNavigator.Screen
                                name={'Auth'}
                                component={AuthenticationNavigator}
                                options={{
                                    headerShown: false,
                                }}
                            />
                        </AuthNavigator.Navigator>
                    )
                        : (
                            <AuthNavigator.Navigator independent={true} initialRouteName="Auth">
                                <AuthNavigator.Screen
                                    name={'Auth'}
                                    component={AuthenticationNavigator}
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                                <AuthNavigator.Screen
                                    name={'Home'}
                                    component={HomeNavigator}
                                    options={{
                                        headerShown: false,
                                    }}
                                />
                            </AuthNavigator.Navigator>
                        )
                    }
                </NavigationContainer>
            )

        }

    }
}
const mapDispatchToProps = dispatch => {
    return {
        actions: {
            home: bindActionCreators(HomeActions, dispatch),
        },
    };
};
export default compose(
    connect(null, mapDispatchToProps),
)(AppContainer);
const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor: THEME_COLOR,
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: THEME_COLOR,
    },
});
