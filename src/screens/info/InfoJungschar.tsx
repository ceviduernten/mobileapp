import React, {Component, ReactElement} from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Info";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class InfoJungschar extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.mainHeaderBox}>
                    <Icon name={'fire'} size={30} style={styles.icon} />
                    <Text style={styles.mainHeaderTitle}>Jungschar</Text>
                </View>
                <ScrollView>
                    <View style={styles.infoBox} key="info-jungschar-intro">
                        <Text style={styles.infoBoxDetails}>
                            In der Jungschar des Cevi Dürnten erlebst du gemeinsam mit gleichaltrigen Jungs und Mädels ab der 2. Klasse Spiele, Sport und Abenteuer.
                            Wir treffen uns jeden zweiten Samstagnachmittag und verbringen die meiste Zeit im Wald, im Dorf oder im Begegnungszentrum «Alte Metzg».
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-jungschar-progi">
                        <Text style={styles.infoBoxTitle}>Programme</Text>
                        <Text style={styles.infoBoxDetails}>
                            Die Programme sind meist verpackt in eine spannende Geschichte (z. B. ein Jugendbuch oder eine biblische Geschichte).
                            Passend dazu wird gebastelt, gesungen und gespielt. Dabei lernst du, wie du ein Zelt baust, nützliche Knoten machst, einen Morse-Text verschlüsselst, erste Hilfe leistest, Karten liest oder ein Feuer entfachst.
                            Die Programme finden in geschlechtergetrennten Gruppen mit Kindern im gleichen Alter statt, so können wir die Programme auf die Bedürfnisse und Wünsche der Kinder zuschneiden.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-froeschli-camps">
                        <Text style={styles.infoBoxTitle}>Lager</Text>
                        <Text style={styles.infoBoxDetails}>
                            Zusätzlich zu den regelmässigen Programmen am Samstagnachmittag führen wir jedes Jahr ein Lager durch, entweder im Sommer im Zelt oder im Herbst in einem Lagerhaus.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-froeschli-leaders">
                        <Text style={styles.infoBoxTitle}>LeiterInnen</Text>
                        <Text style={styles.infoBoxDetails}>
                            Die Gruppen werden von erwachsenen StufenleiterInnen und jungen GruppenleiterInnen betreut.
                            Die LeiterInnen besuchen regelmässig Kurse, in denen Ideen für die Programmgestaltung und Wissen über die Entwicklung und die Bedürfnisse der Kinder vermittelt werden.
                            Dabei kommen auch die Kameradschaft und die persönliche Weiterentwicklung nicht zu kurz.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-froeschli-costs">
                        <Text style={styles.infoBoxTitle}>Kosten</Text>
                        <Text style={styles.infoBoxDetails}>
                            Der Jahresbeitrag für die Jungschar beträgt 50.– Fr., die Lagerteilnahme kostet normalerweise 200.– Fr.
                        </Text>
                    </View>
                    <View style={styles.infoBox} key="info-froeschli-mitmachen">
                        <Text style={styles.infoBoxTitle}>Mitmachen</Text>
                        <Text style={styles.infoBoxDetails}>
                            In unserer Abteilung hat es noch Platz! Du darfst gerne jederzeit unverbindlich bei uns vorbeischauen. Fülle einfach die Schnupperanmeldung auf der Webseite auf. Wir geben dann gerne die Daten bekannt.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
