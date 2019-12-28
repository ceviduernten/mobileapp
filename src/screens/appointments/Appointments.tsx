import React, {Component} from "react";
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Appointments";
import store from "../../../store";
import * as groupActions from "../../actions/groupActions";
import * as appointmentActions from "../../actions/appointmentActions";
import * as eventHelpers from "../../helpers/EventHelpers";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class Appointments extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount(): void {
        store.dispatch(groupActions.getGroups());
    }

    handleRefresh(): void {
        store.dispatch(groupActions.getGroups());
    }

    onPress(group : any) : any {
        store.dispatch(groupActions.setCurrentGroup(group));
        store.dispatch(appointmentActions.getAppointmentOfGroup(group.idGroup));
        this.props.navigation.navigate('DetailScreen', "detail");
    }

    render() {
        const {groups, store} = this.props;
        let refreshing = store.state === "loading";
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.itemTitle}>
                    <Icon name={'users'} size={30} style={styles.detailIcon} />
                    <Text style={styles.detailMainHeader}>Gruppen</Text>
                </View>
                <FlatList
                    data={groups}
                    keyExtractor={(item : any) => item.idGroup}
                    onRefresh={this.handleRefresh}
                    refreshing={refreshing}
                    renderItem={({item}) => {
                        let icon = eventHelpers.getTypeIcon(item.eventType);
                        let sameDay = eventHelpers.sameDay(new Date(item.start), new Date(item.end));
                        return (
                            (
                                <TouchableOpacity onPress={() => this.onPress(item)}>
                                    <View style={styles.item}>
                                        <Text style={styles.title}>{item.name}</Text>
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
