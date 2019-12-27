import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import EventsContainer from "../../containers/EventsContainer";

const EventsNavigation = createStackNavigator({
        ListScreen: {
            screen: EventsContainer,
            navigationOptions: {
                title: "Unsere nächsten Anlässe"
            }
        },
        DetailScreen: {
            screen: EventsContainer,
            navigationOptions: {
                title: "Details zur Information"
            }
        },
    },{
        initialRouteName: 'ListScreen',
    }
);

export default createAppContainer(EventsNavigation);
