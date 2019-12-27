import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import EventsContainer from "../../containers/EventsContainer";
import EventDetail from "../../screens/events/EventDetail";

const EventsNavigation = createStackNavigator({
        ListScreen: {
            screen: EventsContainer,
            navigationOptions: {
                title: "Unsere nächsten Anlässe"
            }
        },
        DetailScreen: {
            screen: EventDetail,
            navigationOptions: {
                title: "Details zum Anlass"
            }
        },
    },{
        initialRouteName: 'ListScreen',
    }
);

export default createAppContainer(EventsNavigation);
