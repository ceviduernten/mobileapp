import React, {Component, ReactElement} from "react";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import styles from "../../styles/screens/Contacts";
import store from "../../../store";
import * as contactActions from "../../actions/contactActions";
import Icon from "react-native-vector-icons/FontAwesome5";
import {isEmpty} from "../../helpers/ObjectHelper";

export default class Contacts extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(): void {
        store.dispatch(contactActions.getContacts());
    }

    renderContactSection(section : string) : ReactElement {
        const {contacts} = this.props;
        if (isEmpty(contacts)) return <></>;
        return contacts[section].map((item : any) => {
            return (
                <View style={styles.contactItem} key={item.idContact}>
                    <Text style={styles.contactName}>{item.firstName} {item.lastName} v/o {item.vulgo}</Text>
                    <Text style={styles.contactDetails}>{item.street}, {item.zip} {item.city}</Text>
                    <Text style={styles.contactDetails}>{item.mail}</Text>
                    {item.phone !== ""&&
                        <Text style={styles.contactDetails}>{item.phone}</Text>
                    }
                </View>
            )
        });
    }

    renderContacts() : ReactElement {
        return (
            <ScrollView>
                <View style={styles.headerBox}>
                    <Text style={styles.headerBoxTitle}>Abteilungsleitung Jungschar</Text>
                </View>
                {this.renderContactSection("jungschar")}
                <View style={styles.headerBox}>
                    <Text style={styles.headerBoxTitle}>Fröschli</Text>
                </View>
                {this.renderContactSection("froeschli")}
                <View style={styles.headerBox}>
                    <Text style={styles.headerBoxTitle}>Vereinspräsident</Text>
                </View>
                {this.renderContactSection("verein")}
            </ScrollView>
        )
    }

    renderError(errorMessage : string) : ReactElement {
        return (
            <View>
                <View style={styles.contactItem}>
                    <Text>{errorMessage}</Text>
                </View>
            </View>
        )
    }

    renderLoadingMessage() : ReactElement {
        return (
            <View>
                <View style={styles.contactItem}>
                    <Text>Kontakte werden geladen.</Text>
                </View>
            </View>
        )
    }

    render() {
        const {store} = this.props;
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.mainHeaderBox}>
                    <Icon name={'users'} size={30} style={styles.icon} />
                    <Text style={styles.mainHeaderTitle}>Kontakte</Text>
                </View>
                {(() => {
                    switch (store.state) {
                        case "success":
                            return this.renderContacts();
                        case "loading":
                            return this.renderLoadingMessage();
                        case "error":
                            return this.renderError(store.errorMessage);
                        default:
                            return null;
                    }
                })()}
            </SafeAreaView>
        );
    }
}
