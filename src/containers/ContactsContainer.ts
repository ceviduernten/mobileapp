import {connect} from "react-redux";
import Contacts from "../screens/contacts/Contacts";

function mapStateToProps(store : any) {
    return {
        contacts: store.contacts.data,
        store: store.contacts
    }
}

const ContactsContainer = connect(mapStateToProps)(Contacts);
export default ContactsContainer;
