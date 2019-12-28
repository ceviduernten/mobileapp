import React, {Component, ReactElement} from "react";
import {SafeAreaView, Text, View} from "react-native";
import styles from "../../styles/screens/Appointments";
import store from "../../../store";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as objectHelper from "../../helpers/ObjectHelper";
import moment from "moment";

export default class AppointmentDetail extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    renderDetailAppointment() : ReactElement {
        const {group, store, appointment} = this.props;
        return (
            <View>
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
            </View>
        );
    }

    renderNoInfos() : ReactElement {
        return (
            <View>
                <View style={styles.detailInfoItem}>
                    <Text>Kein Chästlizettel vorhanden.</Text>
                </View>
            </View>
        )
    }

    renderLoadingMessage() : ReactElement {
        return (
            <View>
                <View style={styles.detailInfoItem}>
                    <Text>Aktueller Chästlizettel wird abgerufen.</Text>
                </View>
            </View>
        )
    }

    render() {
        const {group, store, appointment} = this.props;
        console.log(appointment);
        if (store.state === "loading") {

        }
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.detailTitle}>
                    <Icon name={'fire'} size={30} style={styles.detailIcon} />
                    <Text style={styles.detailMainHeader}>{group.name}</Text>
                </View>
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
                            return this.renderLoadingMessage();
                        default:
                            return null;
                    }
                })()}
            </SafeAreaView>
        );
    }
}
