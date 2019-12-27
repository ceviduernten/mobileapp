import React, {Component} from "react";
import {SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Home";

export default class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.navigateToScreen = this.navigateToScreen.bind(this);
    }

    navigateToScreen(screen : string) : any {
        this.props.navigation.navigate(screen);
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.homeHeader}>
                    <Text style={styles.welcomeMessage}>Herzlich willkommen,</Text>
                    <Text style={styles.welcomeUsername}>Urs Forrer (RIZA-US0190)</Text>
                </View>
            </SafeAreaView>
        )
    }
}
