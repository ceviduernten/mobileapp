import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import AppointmentsContainer from "../../containers/AppointmentsContainer";
import DetailAppointmentContainer from "../../containers/DetailAppointmentContainer";

const AppointmentsNavigation = createStackNavigator({
        ListScreen: {
            screen: AppointmentsContainer,
            navigationOptions: {
                title: "Chästlizettel",
                headerBackTitle: "Zurück"
            }
        },
        DetailScreen: {
            screen: DetailAppointmentContainer,
            navigationOptions: {
                title: "Gruppe XXX",
            }
        },
    },{
        initialRouteName: 'ListScreen',
    }
);

export default createAppContainer(AppointmentsNavigation);