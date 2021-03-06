import React, {Component, ReactElement} from "react";
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Appointments";
import store from "../../../store";
import * as groupActions from "../../actions/groupActions";
import * as appointmentActions from "../../actions/appointmentActions";

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
        this.props.navigation.navigate('DetailScreen', {title : group.name});
    }

    renderGroups() : ReactElement {
        const {groups, store} = this.props;
        let refreshing = store.state === "loading";
        return (
            <FlatList
                data={groups}
                keyExtractor={(item : any) => item.idGroup}
                onRefresh={this.handleRefresh}
                refreshing={refreshing}
                renderItem={({item}) => {
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
        )
    }

    renderError(errorMessage : string) : ReactElement {
        return (
            <View>
                <View style={styles.infoItem}>
                    <Text>{errorMessage}</Text>
                </View>
            </View>
        )
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
            return this.renderError(errorMessage);
        }
    }

    render() {
        const {groups, store} = this.props;
        let refreshing = store.state === "loading";
        return (
            <SafeAreaView style={styles.wrapper}>
                <FlatList
                    data={groups}
                    keyExtractor={(item : any) => item.idGroup}
                    onRefresh={this.handleRefresh}
                    refreshing={refreshing}
                    ListEmptyComponent={this.renderEmptyView(store.errorMessage)}
                    renderItem={({item}) => {
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
