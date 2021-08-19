import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';



const Home = createStackNavigator();

function HomeNavigator() {
    return (
            <Home.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{
                    headerShown: false,
                }}>
                <Home.Screen name="HomeScreen" component={HomeScreen} />
                {/* <Home.Screen name="RegisterScreen" component={} /> */}
            </Home.Navigator>
   
    );
}

export default HomeNavigator;
