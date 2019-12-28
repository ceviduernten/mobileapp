import React from "react";
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import ContactsContainer from "../../containers/ContactsContainer";

const ContactsNavigation = createStackNavigator({
        Contacts: {
            screen: ContactsContainer,
            navigationOptions: {
                title: "Kontakte"
            }
        },
    },{
        initialRouteName: 'Contacts',
    }
);

export default createAppContainer(ContactsNavigation);
