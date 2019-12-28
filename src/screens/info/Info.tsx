import React, {Component, ReactElement} from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Info";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Info extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(section : any) : any {
        console.log(section);
        this.props.navigation.navigate(section, section);
    }

    render() {
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.mainHeaderBox}>
                    <Icon name={'info'} size={30} style={styles.icon} />
                    <Text style={styles.mainHeaderTitle}>Informationen</Text>
                </View>
                <View style={styles.infoBox} key="about-us">
                    <Text style={styles.infoBoxTitle}>Was ist der Cevi?</Text>
                    <Text style={styles.infoBoxDetails}>
                        Der Cevi ist eine Jugendorganisation mit christlichem Hintergrund, die Kindern, Jugendlichen und jungen Erwachsenen eine sinnvolle und spannende Freizeitbeschäftigung bietet. Der Cevi Dürnten ist als Ortsgruppe Teil des regionalen, nationalen und internationalen Verbandes und versteht sich als Partner der reformierten Kirchgemeinde Dürnten.
                    </Text>
                </View>
                <View style={styles.headerBox}>
                    <Text style={styles.headerBoxTitle}>Arbeitsgebiete</Text>
                </View>
                <ScrollView>
                    <View style={styles.infoBox} key="about-description">
                        <Text style={styles.infoBoxDetails}>Für Details auf entsprechende Box klicken</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.onPress('Jungschar')}>
                        <View style={styles.infoBox} key="jungschar">
                            <Text style={styles.infoBoxTitle}>JUNGSCHAR</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onPress('Froeschli')}>
                        <View style={styles.infoBox} key="froeschli">
                            <Text style={styles.infoBoxTitle}>FRÖSCHLI</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onPress('CeviEh')}>
                        <View style={styles.infoBox} key="cevi-eh">
                            <Text style={styles.infoBoxTitle}>Cevi-Eh!</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
