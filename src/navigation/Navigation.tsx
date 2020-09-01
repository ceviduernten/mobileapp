import TabNavigation from "./TabNavigation";
import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
const Stack = createStackNavigator();

function Navigation() {
    return (
        <Stack.Navigator initialRouteName="Secured" screenOptions={{headerShown: false, cardStyle: { backgroundColor: 'white' }}}>
            <Stack.Screen name="Unsecured" component={TabNavigation} />
            <Stack.Screen name="Secured" component={TabNavigation} />
        </Stack.Navigator>
    );
}

export default Navigation;
