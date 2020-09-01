import React, {Component, ReactElement} from "react";
import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Appointments";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as objectHelper from "../../helpers/ObjectHelper";
import moment from "moment";

export default class SignoffAppointment extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    doAppointmentAction(action : string) {
        switch (action) {
            case "signon":
                this.props.navigation.navigate('SignonAppointmentScreen', {title : "Anmelden"});
                break;
            case "signoff":
                this.props.navigation.navigate('SignoffAppointmentScreen', {title : "Abmelden"});
                break;
            default:
                // To nothing, stay on the screen
                break;
        }
    }

    renderDetailAppointment() : ReactElement {
        const {appointment} = this.props;
        return (
            <>
                <View style={styles.detailInfoItem}>
                    <Text style={styles.detailInfoTitle}>Datum und Zeit</Text>
                    <Text>{moment(appointment.date).format("DD.MM.YYYY")}, {appointment.time}</Text>
                </View>
                <View style={styles.detailInfoItem}>
                    <Text style={styles.detailInfoTitle}>Ort</Text>
                    <Text>{appointment.location}</Text>
                </View>
                <View style={styles.detailInfoItem}>
                    <Text style={styles.detailInfoTitle}>Infos</Text>
                    <Text>{appointment.infos}</Text>
                </View>
                <View style={styles.detailActions}>
                    <TouchableOpacity onPress={() => this.doAppointmentAction("signoff")} style={styles.signoff}>
                        <Text style={styles.textAction}>Abmelden</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.doAppointmentAction("signon")} style={styles.signon}>
                        <Text style={styles.textAction}>Anmelden</Text>
                    </TouchableOpacity>
                </View>
            </>
        );
    }

    renderNoInfos() : ReactElement {
        return (
            <>
                <View style={styles.detailInfoItem}>
                    <Text>Kein Chästlizettel vorhanden.</Text>
                </View>
            </>
        )
    }

    renderLoadingMessage() : ReactElement {
        return (
            <>
                <View style={styles.detailInfoItem}>
                    <Text>Aktueller Chästlizettel wird abgerufen.</Text>
                </View>
            </>
        )
    }

    renderError(errorMessage : string) : ReactElement {
        return (
            <>
                <View style={styles.detailInfoItem}>
                    <Text>{errorMessage}</Text>
                </View>
            </>
        )
    }

    render() {
        const {group, store, appointment} = this.props;
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.detailTitle}>
                    <Icon name={'fire'} size={30} style={styles.detailIcon} />
                    <Text style={styles.detailMainHeader}>{group.name}</Text>
                </View>
                <ScrollView>
                    {(() => {
                        switch (store.state) {
                            case "success":
                                if (objectHelper.isEmpty(appointment)) {
                                    return this.renderNoInfos();
                                }
                                return this.renderDetailAppointment();
                            case "loading":
                                return this.renderLoadingMessage();
                            case "error":
                                return this.renderError(store.errorMessage);
                            default:
                                return null;
                        }
                    })()}
                    <View style={styles.groupInfo}>
                        <Text style={styles.detailInfoTitleHeader}>Zur Gruppe</Text>
                        <View style={styles.groupInfoBox}>
                            <Text style={styles.detailInfoTitle}>Leiter</Text>
                            <Text>{group.leaders}</Text>
                        </View>
                        <View style={styles.groupInfoBox}>
                            <Text style={styles.detailInfoTitle}>Beschreibung</Text>
                            <Text>{group.description}</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
