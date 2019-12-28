import React, {Component} from "react";
import {Image, SafeAreaView, ScrollView, Text, View} from "react-native";
import styles from "../../styles/screens/Home";

export default class Home extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.logoWrapper}>
                        <Image source={require('../../img/cevi.png')} resizeMode="contain" style={styles.logo} />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.title} adjustsFontSizeToFit={true}>Cevi Dürnten</Text>
                        <Text style={styles.info}>Die App | Alle Infos an einem Ort</Text>
                        <Text style={styles.credoHeader}>Credo</Text>
                        <Text style={styles.credoText}>«Wir erfahren und verbreiten Freude ... an sich selber, aneinander und am Leben mit Gott.»</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
