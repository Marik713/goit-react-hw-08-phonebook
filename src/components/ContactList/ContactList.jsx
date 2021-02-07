import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import ContactListItem from "./ContactListItem/ContactListItem";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import contactTransition from "../../transitions/contact.module.css";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const ContactList = ({ contacts }) => (
  <TransitionGroup component="ul" className={styles.ContactList}>
    {contacts.map(({ id }) => (
      <CSSTransition
        key={id}
        timeout={250}
        unmountOnExit
        classNames={contactTransition}
      >
        <ContactListItem key={id} id={id} />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);
