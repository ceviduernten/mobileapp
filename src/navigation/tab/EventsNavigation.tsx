import React from "react";
import EventsContainer from "../../containers/EventsContainer";
import EventDetail from "../../screens/events/EventDetail";
import {createStackNavigator} from "@react-navigation/stack";
import colors from "../../styles/colors";
import * as headerBar from "../../styles/shared/headerBar";
import HeaderBar from "../../components/shared/header/HeaderBar";
const Stack = createStackNavigator();

function EventsNavigation() {
    return (
        <Stack.Navigator initialRouteName="ListScreen" screenOptions={{
            cardStyle: { backgroundColor: colors.white },
            headerBackTitleStyle: headerBar.headerBackTitleStyle,
            headerBackTitle: "Liste",
            headerStyle: headerBar.headerStyle,
            headerTitleStyle: headerBar.headerTitleStyle,
            headerTintColor: headerBar.headerTintColor,
            header: undefined,
        }}>
            <Stack.Screen name="ListScreen" component={EventsContainer} options={{
                headerTitle : props => <HeaderBar icon="calendar" label="Unsere nächsten Anlässe" />
            }} />
            <Stack.Screen name="DetailScreen" component={EventDetail} options={({ route }) => {
                return {
                    headerStyle: headerBar.headerStyleRed,
                    headerTitle : props => <HeaderBar icon={(route.params as any).icon} label={(route.params as any).title} />
                };
            }} />
        </Stack.Navigator>
    );
}

export default EventsNavigation;
