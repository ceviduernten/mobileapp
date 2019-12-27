import React from "react";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs"
import colors from "../styles/colors";
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeNavigation from "./tab/HomeNavigation";
import EventsNavigation from "./tab/EventsNavigation";

const TabNavigation = createBottomTabNavigator({
        Home: {
            screen: HomeNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => ( <Icon name={'home'} size={30} style={{color: tintColor}} />)
            }
        },
        Events: {
            screen: EventsNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => ( <Icon name={'calendar'} size={30} style={{color: tintColor}} />)
            }
        },
        Appointments: {
            screen: HomeNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => ( <Icon name={'fire'} size={30} style={{color: tintColor}} />)
            }
        },
        Contacts: {
            screen: HomeNavigation,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => ( <Icon name={'address-card'} size={30} style={{color: tintColor}} />)
            }
        },
    },{
        initialRouteName: 'Home',
            tabBarOptions: {
            style: {
                backgroundColor: colors.white,
            },
            activeTintColor: colors.rizBlue,
                inactiveTintColor: colors.darkAccentColor,
                showLabel: false,
                showIcon: true,
                adaptive: true,
                keyboardHidesTabBar: true
        },
    }
);

export default createAppContainer(TabNavigation);