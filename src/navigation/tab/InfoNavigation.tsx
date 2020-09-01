import React from "react";
import Info from "../../screens/info/Info";
import InfoJungschar from "../../screens/info/InfoJungschar";
import InfoFroeschli from "../../screens/info/InfoFroeschli";
import InfoCeviEh from "../../screens/info/InfoCeviEh";
import {createStackNavigator} from "@react-navigation/stack";
import colors from "../../styles/colors";
import * as headerBar from "../../styles/shared/headerBar";
import HeaderBar from "../../components/shared/header/HeaderBar";

const Stack = createStackNavigator();

function InfoNavigation() {
    return (
        <Stack.Navigator initialRouteName="Info" screenOptions={{
            cardStyle: { backgroundColor: colors.white },
            headerBackTitleStyle: headerBar.headerBackTitleStyle,
            headerBackTitle: "Zurück",
            headerStyle: headerBar.headerStyle,
            headerTitleStyle: headerBar.headerTitleStyle,
            headerTintColor: headerBar.headerTintColor,
            header: undefined,
        }}>
            <Stack.Screen name="Info" component={Info} options={{
                headerTitle : props => <HeaderBar icon="calendar" label="Informationen" />
            }} />
            <Stack.Screen name="Jungschar" component={InfoJungschar} options={{
                headerStyle: headerBar.headerStyleRed,
                headerTitle : props => <HeaderBar icon="fire" label="Jungschar" />
            }} />
            <Stack.Screen name="Froeschli" component={InfoFroeschli} options={{
                headerStyle: headerBar.headerStyleRed,
                headerTitle : props => <HeaderBar icon="frog" label="Fröschli" />
            }} />
            <Stack.Screen name="CeviEh" component={InfoCeviEh} options={{
                headerStyle: headerBar.headerStyleRed,
                headerTitle : props => <HeaderBar icon="street-view" label="Cevi-Eh!" />
            }} />
        </Stack.Navigator>
    );
}

export default InfoNavigation;
