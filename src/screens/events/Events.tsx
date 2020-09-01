import React, {Component, ReactElement} from "react";
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Events";
import store from "../../../store";
import * as eventActions from "../../actions/eventActions";
import * as eventHelpers from "../../helpers/EventHelpers";
import Icon from "react-native-vector-icons/FontAwesome5";
import moment from "moment";

export default class Events extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount(): void {
        store.dispatch(eventActions.getEvents());
    }

    handleRefresh(): void {
        store.dispatch(eventActions.getEvents());
    }

    onPress(event : any) : any {
        store.dispatch(eventActions.setCurrentEvent(event));
        this.props.navigation.navigate('DetailScreen', "detail");
        this.props.navigation.navigate('DetailScreen', {title : event.summary, icon: eventHelpers.getTypeIcon(event.eventType)});
    }

    renderEmptyView(errorMessage : string) : ReactElement {
        if (errorMessage === "") {
            return (
                <View>
                    <View style={styles.infoItem}>
                        <Text>Keine Daten vorhanden</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <View>
                    <View style={styles.infoItem}>
                        <Text>{errorMessage}</Text>
                    </View>
                </View>
            )
        }
    }

    render() {
        const {events, store} = this.props;
        let refreshing = store.state === "loading";
        return (
            <SafeAreaView style={styles.wrapper}>
                <FlatList
                    data={events}
                    keyExtractor={(item : any) => item.uid}
                    onRefresh={this.handleRefresh}
                    refreshing={refreshing}
                    ListEmptyComponent={this.renderEmptyView(store.errorMessage)}
                    renderItem={({item}) => {
                        let icon = eventHelpers.getTypeIcon(item.eventType);
                        let sameDay = eventHelpers.sameDay(new Date(item.start), new Date(item.end));
                        return (
                            (
                                <TouchableOpacity onPress={() => this.onPress(item)}>
                                    <View style={styles.item}>
                                        <View style={styles.eventIcon}>
                                            <Icon name={icon} size={30} style={styles.icon} />
                                        </View>
                                        <View style={styles.eventTitle}>
                                            <Text style={styles.title}>{item.summary}</Text>
                                            <Text style={styles.date}>{moment(item.start).format("DD.MM.YYYY")}{!sameDay && " bis " + moment(item.end).format("DD.MM.YYYY")}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        )
                    }}
                />
            </SafeAreaView>
        );
    }
}
