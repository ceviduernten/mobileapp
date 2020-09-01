import React from "react";
import ContactsContainer from "../../containers/ContactsContainer";
import {createStackNavigator} from "@react-navigation/stack";
import colors from "../../styles/colors";
import * as headerBar from "../../styles/shared/headerBar";
import HeaderBar from "../../components/shared/header/HeaderBar";
const Stack = createStackNavigator();

function ContactsNavigation() {
    return (
        <Stack.Navigator initialRouteName="Contacts" screenOptions={{
            cardStyle: { backgroundColor: colors.white },
            headerBackTitleStyle: headerBar.headerBackTitleStyle,
            headerBackTitle: "Liste",
            headerStyle: headerBar.headerStyle,
            headerTitleStyle: headerBar.headerTitleStyle,
            headerTintColor: headerBar.headerTintColor,
            header: undefined,
        }}>
            <Stack.Screen name="Contacts" component={ContactsContainer} options={{
                headerTitle : props => <HeaderBar icon="users" label="Kontakte" />
            }} />
        </Stack.Navigator>
    );
}

export default ContactsNavigation;
