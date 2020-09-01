import React, {Component} from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import styles from "../../styles/screens/Info";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class InfoFroeschli extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <ScrollView>
                    <View style={styles.infoBox} key="info-froeschli-intro">
                        <Text style={styles.infoBoxDetails}>
                            Bei den Fröschli des Cevi Dürnten erlebst du gemeinsam mit gleichaltrigen Jungs und Mädels ab dem 1. Kindergarten Spiel, Sport und viele Abenteuer.
                            Wir treffen uns einmal im Monat an einem Jungschar-Nachmittag und verbringen drei spannende Stunden im Wald, im Dorf, im Begegnungszentrum «Alte Metzg» oder im «Chiletreff» bei der Kirche Dürnten.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-froeschli-progi">
                        <Text style={styles.infoBoxTitle}>Programme</Text>
                        <Text style={styles.infoBoxDetails}>
                            Auf spielerische Art lernen wir den Lebensraum Wald und die Natur besser kennen, hören spannende Geschichten, singen, basteln und bräteln unseren Zvieri wie die Grossen auf dem Feuer.
                            Bei den Fröschli sind die Programme nicht geschlechtergetrennt.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-froeschli-costs">
                        <Text style={styles.infoBoxTitle}>Kosten</Text>
                        <Text style={styles.infoBoxDetails}>
                            Der Betrag für den Besuch eines Nachmittag-Programms beträgt 5.– Fr. und wird direkt am Nachmittag eingezogen.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-froeschli-mitmachen">
                        <Text style={styles.infoBoxTitle}>Mitmachen</Text>
                        <Text style={styles.infoBoxDetails}>
                            Bei den Fröschli hat es noch Platz!  Füllen Sie einfach die Schnupperanmeldung auf der Webseite auf. Wir geben dann gerne die Daten bekannt.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
