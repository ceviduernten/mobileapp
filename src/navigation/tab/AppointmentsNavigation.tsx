import React from "react";
import AppointmentsContainer from "../../containers/AppointmentsContainer";
import DetailAppointmentContainer from "../../containers/DetailAppointmentContainer";
import SignonAppointmentContainer from "../../containers/SignonAppointmentContainer";
import SignoffAppointmentContainer from "../../containers/SignoffAppointmentContainer";
import {createStackNavigator} from "@react-navigation/stack";
import colors from "../../styles/colors";
import HeaderBar from "../../components/shared/header/HeaderBar";
import * as headerBar from "../../styles/shared/headerBar";

const Stack = createStackNavigator();

function AppointmentsNavigation() {
    return (
        <Stack.Navigator initialRouteName="ListScreen" screenOptions={{
            cardStyle: { backgroundColor: colors.white },
            headerBackTitleStyle: headerBar.headerBackTitleStyle,
            headerBackTitle: "Zurück",
            headerStyle: headerBar.headerStyle,
            headerTitleStyle: headerBar.headerTitleStyle,
            headerTintColor: headerBar.headerTintColor,
            header: undefined,
        }}>
            <Stack.Screen name="ListScreen" component={AppointmentsContainer} options={{
                headerTitle : props => <HeaderBar icon="users" label={"Chästlizettel"} />
            }} />
            <Stack.Screen name="DetailScreen" component={DetailAppointmentContainer} options={({ route }) => {
                return {
                    headerStyle: headerBar.headerStyleRed,
                    headerTitle : props => <HeaderBar icon="fire" label={(route.params as any).title} />
                };
            }} />
            <Stack.Screen name="SignonAppointmentScreen" component={SignonAppointmentContainer} options={({ route }) => {
                return {
                    headerStyle: headerBar.headerStyleRed,
                    headerTitle : props => <HeaderBar icon="calendar-check" label={(route.params as any).title} />
                };
            }} />
            <Stack.Screen name="SignoffAppointmentScreen" component={SignoffAppointmentContainer} options={({ route }) => {
                return {
                    headerStyle: headerBar.headerStyleRed,
                    headerTitle : props => <HeaderBar icon="calendar-times" label={(route.params as any).title} />
                };
            }} />
        </Stack.Navigator>
    );
}

export default AppointmentsNavigation;
