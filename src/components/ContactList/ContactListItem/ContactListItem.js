import React from "react";
import contactsOperations from "../../../redux/contacts/contactsOperations";
import { connect } from "react-redux";
import styles from "./ContactListItem.module.css";
import contactsSelectors from "../../../redux/contacts/contactsSelectors";

const ContactListItem = ({ name, number, onRemove }) => (
  <li className={styles.ContactList_item}>
    <div className={styles.contactWrapper}>
      <p>{name}</p>
      <p className={styles.numberContact}>{number}</p>
    </div>
    {
      <button
        className={styles.ContactList_button}
        type="button"
        name="delete"
        onClick={onRemove}
      >
        &#10006;
      </button>
    }
  </li>
);

const mapState = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return {
    ...contact,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapState, mapDispatchToProps)(ContactListItem);
