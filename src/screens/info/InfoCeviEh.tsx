import React, {Component} from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import styles from "../../styles/screens/Info";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class InfoCeviEh extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <ScrollView>
                    <View style={styles.infoBox} key="info-cevieh-intro">
                        <Text style={styles.infoBoxDetails}>
                            Cevi Eh! ist der Ort für Ehemalige und Friends, die miteinander und mit dem Cevi Dürnten verbunden bleiben möchten und in diesem Sinn für sich selber und den Cevi Dürnten etwas erreichen möchten.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-cevieh-info">
                        <Text style={styles.infoBoxDetails}>
                            Beim «Cevi Eh!» handelt es sich um eine Gruppe für ehemalige CevianerInnen und Freunde, die durch gemeinsame Cevi-Erinnerungen verbunden sind.
                            Der Cevi Eh! ist weder ein Nostalgie-Grüppchen, das sich nur um sich selber dreht, noch ein Einsatzteam, dass einzig zur Unterstützung des restlichen Cevis da ist.
                            Die Mitglieder treffen sich zweimal jährlich zu einem gemeinsamen Znacht, an dem Cevi-Erinnerungen ausgetauscht und weitere Aktivitäten geplant werden.
                            Damit sollen die langjährigen Freundschaften, die im Cevi Dürnten entstanden sind, auch nach der Cevi-Karriere aufrecht erhalten werden.
                            Auch wenn der Fokus nicht mehr auf dem aktiven Engagement liegt, steht der Cevi Eh! den aktiven Cevianerinnen und Cevianern mit Know How und Manpower unterstützend zur Seite.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
