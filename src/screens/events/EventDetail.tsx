import React, {Component} from "react";
import {SafeAreaView, Text, View} from "react-native";
import styles from "../../styles/screens/Events";
import store from "../../../store";
import Icon from "react-native-vector-icons/FontAwesome5";
import * as eventHelpers from "../../helpers/EventHelpers";
import moment from "moment";

export default class EventDetail extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const event = (store.getState() as any).events.selectedObject;
        let sameDay = eventHelpers.sameDay(new Date(event.start), new Date(event.end));
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.itemTitle}>
                    <Icon name={eventHelpers.getTypeIcon(event.eventType)} size={30} style={styles.detailIcon} />
                    <Text style={styles.detailMainHeader}>{event.summary}</Text>
                </View>
                <View style={styles.detailInfoItem}>
                    <Text style={styles.detailInfoTitle}>{sameDay ? "Datum" : "Von"}</Text>
                    <Text>{moment(event.start).format("DD.MM.YYYY")}</Text>
                </View>
                {!sameDay &&
                    <View style={styles.detailInfoItem}>
                        <Text style={styles.detailInfoTitle}>Bis</Text>
                        <Text>{moment(event.end).format("DD.MM.YYYY")}</Text>
                    </View>
                }
                {sameDay &&
                    <View style={styles.detailInfoItem}>
                        <Text style={styles.detailInfoTitle}>Zeit</Text>
                        <Text>{moment(event.start).format("HH:mm")} bis {moment(event.end).format("HH:mm")} Uhr</Text>
                    </View>
                }
                {event.location !== "" &&
                    <View style={styles.detailInfoItem}>
                        <Text style={styles.detailInfoTitle}>Ort</Text>
                        <Text>{event.location}</Text>
                    </View>
                }
                {event.description !== "" &&
                    <View style={styles.detailInfoItem}>
                        <Text style={styles.detailInfoTitle}>Beschreibung</Text>
                        <Text>{event.description}</Text>
                    </View>
                }
            </SafeAreaView>
        );
    }
}
