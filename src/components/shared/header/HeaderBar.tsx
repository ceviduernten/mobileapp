import React, {Component} from "react";
import {View, Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as headerBar from "../../../styles/shared/headerBar";

export default class HeaderBar extends Component<any, any> {
    render() {
        return(
            <View style={headerBar.headerContainer}>
                <Icon name={this.props.icon} size={20} style={headerBar.icon} />
                <View>
                    <Text style={headerBar.headerBarTtile}>{this.props.label}</Text>
                </View>
            </View>
        )
    }
}