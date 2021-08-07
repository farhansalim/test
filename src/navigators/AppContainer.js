import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/auth/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import DetailPage from '../screens/home/DetailScreen';
import { DrawerNavigator } from '../navigators/DrawerNavigator';
import LoginScreen from '../screens/auth/Login';

const AuthNavigator = createStackNavigator();
const DashboardNavigator = createStackNavigator();
const THEME_COLOR = '#285E29';

class AppContainer extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
        };
    }

    splashTime = () => {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 3000);
    };

    componentDidMount() {
        this.splashTime();
    }

    render() {
        const { loading, hasToken } = this.state;

        if (loading) {
            return <SplashScreen />;
        }
        else{
            return (
                <NavigationContainer>
                        <AuthNavigator.Navigator  presentation="transparentModal"  initialRouteName="HomeScreen">
                            <AuthNavigator.Screen
                                name={'HomeScreen'}
                                component={HomeScreen}
                                options={{
                                    headerShown: false,
                                }}
                            />
                            <AuthNavigator.Screen
                                name={'DetailPage'}
                                component={DetailPage}
                                options={{ headerShown: false }}
                            />
                        </AuthNavigator.Navigator>
                         </NavigationContainer>
                    ) 
            
        }
        
    }
}
export default AppContainer;

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
