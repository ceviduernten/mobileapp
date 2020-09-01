import React from "react";
import Home from "../../screens/home/Home";
import {createStackNavigator} from "@react-navigation/stack";
import colors from "../../styles/colors";

const Stack = createStackNavigator();

function HomeNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false, cardStyle: {backgroundColor: colors.white}}}>
            <Stack.Screen name="Home" component={Home} options={{
                title: "Home"
            }} />
        </Stack.Navigator>
    );
}

export default HomeNavigation;
