import React from "react";
import colors from "../styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeNavigation from "./tab/HomeNavigation";
import EventsNavigation from "./tab/EventsNavigation";
import AppointmentsNavigation from "./tab/AppointmentsNavigation";
import ContactsNavigation from "./tab/ContactsNavigation";
import InfoNavigation from "./tab/InfoNavigation";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Home" tabBarOptions={{
            style: {
                backgroundColor: colors.white,
                paddingTop: 4
            },
            activeTintColor: colors.ceviBlue,
            inactiveTintColor: colors.ceviRed,
            showLabel: true,
            showIcon: true,
            adaptive: true,
            keyboardHidesTabBar: true
        }}>
            <Tab.Screen name="Home" component={HomeNavigation} options={{
                tabBarIcon: ({color}) => ( <Icon name={'home'} size={22} style={{color: color}} />),
                tabBarLabel: "Home"
            }} />
            <Tab.Screen name="Events" component={EventsNavigation} options={{
                tabBarIcon: ({color}) => ( <Icon name={'calendar'} size={22} style={{color: color}} />),
                tabBarLabel: "Anlässe"
            }} />
            <Tab.Screen name="Appointments" component={AppointmentsNavigation} options={{
                tabBarIcon: ({color}) => ( <Icon name={'fire'} size={22} style={{color: color}} />),
                tabBarLabel: "Chästlizettel"
            }} />
            <Tab.Screen name="Contacts" component={ContactsNavigation} options={{
                tabBarIcon: ({color}) => ( <Icon name={'address-card'} size={22} style={{color: color}} />),
                tabBarLabel: "Kontakte"
            }} />
            <Tab.Screen name="Info" component={InfoNavigation} options={{
                tabBarIcon: ({color}) => ( <Icon name={'info'} size={22} style={{color: color}} />),
                tabBarLabel: "Über uns"
            }} />
        </Tab.Navigator>
    );
}

export default TabNavigation;