import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import colors from "../styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeNavigation from "./tab/HomeNavigation";
import EventsNavigation from "./tab/EventsNavigation";
import {StyleSheet} from "react-native";

const TabNavigation = createBottomTabNavigator({
        Home: {
            screen: HomeNavigation,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => ( <Icon name={'home'} size={22} style={{color: tintColor}} />),
                tabBarLabel: "Home"
            }
        },
        Events: {
            screen: EventsNavigation,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => ( <Icon name={'calendar'} size={22} style={{color: tintColor}} />),
                tabBarLabel: "Anlässe"
            }
        },
        Appointments: {
            screen: HomeNavigation,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => ( <Icon name={'fire'} size={22} style={{color: tintColor}} />),
                tabBarLabel: "Chästli"
            }
        },
        Contacts: {
            screen: HomeNavigation,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => ( <Icon name={'address-card'} size={22} style={{color: tintColor}} />),
                tabBarLabel: "Kontakte"
            }
        },
    },{
        initialRouteName: 'Home',
            tabBarOptions: {
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
        },
    }
);

export default createAppContainer(TabNavigation);