import React, {Component} from "react";
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import styles from "../../styles/screens/Events";
import store from "../../../store";
import * as eventActions from "../../actions/eventActions";

export default class Events extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount(): void {
        // Load contact containers from api here
        store.dispatch(eventActions.getEvents());
    }

    handleRefresh(): void {
        // Refresh contact containers from api here
        store.dispatch(eventActions.getEvents());
    }

    onPress(event : object) : any {
        store.dispatch(eventActions.setCurrentEvent(event));
        //this.props.navigation.navigate('DetailScreen', "detail");
    }

    render() {
        const {events, store} = this.props;
        let refreshing = store.state === "loading";
        console.log(events);
        return (
            <SafeAreaView style={styles.wrapper}>
                <FlatList
                    data={events}
                    keyExtractor={(item : any) => item.uid}
                    onRefresh={this.handleRefresh}
                    refreshing={refreshing}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => this.onPress(item)}>
                            <View style={styles.item}>
                                <Text style={styles.title}>{item.summary}</Text>
                                <Text style={styles.subTitle}>{item.summary}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
        );
    }
}
